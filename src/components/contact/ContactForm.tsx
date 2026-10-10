"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { contact } from "@/lib/content";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

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
        className="bg-white border border-intallo-input-border p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 shadow-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="w-16 h-16 bg-blue-50 text-intallo-blue rounded-full flex items-center justify-center"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <h4 className="text-intallo-navy text-xl font-bold">Message Sent Successfully</h4>
        <p className="text-intallo-muted text-sm max-w-sm">
          Thanks for reaching out! We&apos;ve received your note and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-intallo-input-border p-8 md:p-10 rounded-2xl space-y-6 shadow-sm"
    >
      <h3 className="text-xl font-bold text-intallo-navy text-center mb-6">
        {form.heading}
      </h3>

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
        <div key={field.name} className="space-y-1">
          <label htmlFor={field.name} className="block text-black font-bold text-sm">
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
            className="w-full bg-intallo-page border border-intallo-input-border rounded-lg px-4 py-3 text-sm text-intallo-body focus:outline-none focus:ring-2 focus:ring-intallo-blue transition-all duration-200"
          />
        </div>
      ))}

      <div className="space-y-1">
        <label htmlFor="message" className="sr-only">
          {form.message.hiddenLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={form.message.placeholder}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-intallo-page border border-intallo-input-border rounded-lg px-4 py-3 text-sm text-intallo-body focus:outline-none focus:ring-2 focus:ring-intallo-blue transition-all duration-200"
        />
      </div>

      {status === "error" && (
        <div aria-live="polite" className="text-red-600 text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-intallo-blue hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-sm"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{form.submitting}</span>
          </>
        ) : (
          <span>{form.submit}</span>
        )}
      </motion.button>
    </form>
  );
}
