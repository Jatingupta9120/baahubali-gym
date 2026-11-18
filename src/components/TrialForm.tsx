"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { site, waLink } from "@/config/site";
import { goals } from "@/config/content";

type Variant = "trial" | "join" | "contact";
type Errors = Partial<Record<"name" | "phone" | "email" | "goal", string>>;

const copy: Record<Variant, { submit: string; intro: string; label: string }> = {
  trial: { submit: "Book My Free Trial", intro: "book a free trial", label: "Free trial form" },
  join: { submit: "Join the Gym", intro: "join the gym", label: "Join form" },
  contact: { submit: "Send Enquiry", intro: "make an enquiry", label: "Contact form" },
};

/**
 * Reusable enquiry form: validation, loading + success/error states, spam protection
 * (hidden honeypot + minimum fill time). POSTs JSON to site.formEndpoint when configured;
 * otherwise hands the enquiry over via WhatsApp (nothing is stored by this site).
 * Reads ?goal= from the URL so the homepage goal chips pre-select an option.
 */
export default function TrialForm({ variant = "trial", id }: { variant?: Variant; id?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mode, setMode] = useState<"sent" | "whatsapp">("sent");
  const [goal, setGoal] = useState("");
  const startedAt = useRef(Date.now());
  const c = copy[variant];

  useEffect(() => {
    const g = new URLSearchParams(window.location.search).get("goal");
    if (g && (goals as readonly string[]).includes(g)) setGoal(g);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = (k: string) => String(fd.get(k) ?? "").trim();
    if (v("company")) return; // honeypot
    const errs: Errors = {};
    if (v("name").length < 2) errs.name = "Please enter your name.";
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(v("phone").replace(/[\s-]/g, ""))) errs.phone = "Enter a valid 10-digit Indian mobile number.";
    if (v("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) errs.email = "Enter a valid email address.";
    if (!goal) errs.goal = "Please choose your goal.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    if (Date.now() - startedAt.current < 2500) { setStatus("error"); return; }

    const payload = { type: variant, name: v("name"), phone: v("phone"), email: v("email"), goal, time: v("time"), message: v("message") };
    setStatus("loading");

    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
        if (!res.ok) throw new Error(String(res.status));
        setMode("sent"); setStatus("success"); form.reset(); setGoal("");
      } catch { setStatus("error"); }
      return;
    }

    const text = `Hello ${site.name}, I would like to ${c.intro}.\nName: ${payload.name}\nPhone: ${payload.phone}\nGoal: ${payload.goal}${payload.time ? `\nPreferred time: ${payload.time}` : ""}${payload.message ? `\nMessage: ${payload.message}` : ""}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setMode("whatsapp"); setStatus("success"); form.reset(); setGoal("");
  }

  const label = "text-xs font-semibold uppercase tracking-[0.18em] text-mute";
  const err = "mt-1 block text-xs text-[#ff8a5c]";

  if (status === "success") {
    return (
      <div role="status" className="border border-gold/50 bg-panel p-8 text-center">
        <CheckCircle2 className="mx-auto text-gold" size={40} aria-hidden />
        <h3 className="mt-4 font-display text-3xl uppercase">{mode === "sent" ? "You're in." : "Almost there"}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{mode === "sent" ? "We have received your request and will contact you shortly." : "WhatsApp has opened with your details filled in. Press send to share your request with us."}</p>
        <button type="button" onClick={() => { setStatus("idle"); startedAt.current = Date.now(); }} className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-gold underline underline-offset-4">Send another request</button>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label={c.label}>
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="block"><span className={label}>Full name *</span>
        <input name="name" autoComplete="name" className="field" placeholder="Your name" aria-invalid={!!errors.name} />
        {errors.name && <span className={err}>{errors.name}</span>}</label>
      <label className="block"><span className={label}>Mobile number *</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" placeholder="98765 43210" aria-invalid={!!errors.phone} />
        {errors.phone && <span className={err}>{errors.phone}</span>}</label>
      <label className="block"><span className={label}>Email (optional)</span>
        <input name="email" type="email" autoComplete="email" className="field" placeholder="you@example.com" aria-invalid={!!errors.email} />
        {errors.email && <span className={err}>{errors.email}</span>}</label>
      <label className="block"><span className={label}>Your goal *</span>
        <select name="goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="field [&>option]:text-ink" aria-invalid={!!errors.goal}>
          <option value="" disabled>Select your goal</option>
          {goals.map((g) => <option key={g}>{g}</option>)}
        </select>
        {errors.goal && <span className={err}>{errors.goal}</span>}</label>
      <label className="block sm:col-span-2"><span className={label}>Preferred time (optional)</span>
        <input name="time" className="field" placeholder="e.g. Morning / Evening" /></label>
      <label className="block sm:col-span-2"><span className={label}>Message (optional)</span>
        <textarea name="message" rows={3} className="field resize-none" placeholder="Tell us about your training experience" /></label>
      {status === "error" && <p role="alert" className="text-sm text-[#ff8a5c] sm:col-span-2">Something went wrong. Please try again, or call / WhatsApp us directly.</p>}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "loading"} className="btn btn-gold w-full sm:w-auto">
          {status === "loading" ? (<><Loader2 className="animate-spin" size={16} aria-hidden /> Sending…</>) : c.submit}
        </button>
        {!site.formEndpoint && <p className="mt-3 text-xs text-mute">Your request opens in WhatsApp so you can send it to us directly.</p>}
      </div>
    </form>
  );
}
