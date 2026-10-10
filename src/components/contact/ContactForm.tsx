"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { contact } from "@/lib/content";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormDataState {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
  [key: string]: string;
}

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const { form } = contact;
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "We could not send your message right now. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("We could not send your message right now. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/30 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.2)]"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>
        <h4 className="text-white text-2xl font-bold tracking-tight">Message Dispatched Successfully</h4>
        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
          Thank you for reaching out. Your project brief has been logged and our team will review and reply within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 space-y-5 shadow-2xl relative"
    >
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {form.heading}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Fill out the details below and we&apos;ll schedule an introductory architecture session.
        </p>
      </div>

      {/* Honeypot field - visually hidden */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {form.fields.map((field) => (
        <div key={field.name} className="space-y-1.5">
          <label htmlFor={field.name} className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required
            value={formData[field.name]}
            onChange={handleChange}
            className="w-full bg-[#0D111A] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0099FF] focus:ring-1 focus:ring-[#0099FF] transition-all"
          />
        </div>
      ))}

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase tracking-wider">
          Project Scope &amp; Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={form.message.placeholder}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#0D111A] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#1A76FF] focus:ring-1 focus:ring-[#1A76FF] transition-all resize-none"
        />
      </div>

      {status === "error" && (
        <div aria-live="polite" className="text-red-400 text-xs font-mono p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gradient-to-r from-[#0C34C5] to-[#1A76FF] hover:from-[#002FA7] hover:to-[#0066FF] text-white font-medium py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{form.submitting}</span>
          </>
        ) : (
          <>
            <span>{form.submit}</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
