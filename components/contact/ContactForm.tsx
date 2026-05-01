"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border py-4 text-body text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors duration-300";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center py-20 text-center"
      >
        <h3 className="text-heading mb-4">Thank you.</h3>
        <p className="text-body text-muted max-w-sm">
          We&apos;ve received your message and will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className="space-y-2"
    >
      <div>
        <label htmlFor="name" className="text-caption uppercase tracking-widest text-muted block mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          required
          className={inputClasses}
        />
      </div>

      <div className="pt-6">
        <label htmlFor="email" className="text-caption uppercase tracking-widest text-muted block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          required
          className={inputClasses}
        />
      </div>

      <div className="pt-6">
        <label htmlFor="company" className="text-caption uppercase tracking-widest text-muted block mb-2">
          Company
        </label>
        <input
          id="company"
          type="text"
          placeholder="Your company name"
          className={inputClasses}
        />
      </div>

      <div className="pt-6">
        <label htmlFor="service" className="text-caption uppercase tracking-widest text-muted block mb-2">
          Service interest
        </label>
        <select
          id="service"
          className={`${inputClasses} appearance-none cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="software">Software Development</option>
          <option value="marketing">Marketing Solutions</option>
          <option value="both">Both</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="pt-6">
        <label htmlFor="message" className="text-caption uppercase tracking-widest text-muted block mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project..."
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-caption uppercase tracking-widest rounded-full hover:bg-accent transition-colors duration-500"
        >
          Send message
          <span>&rarr;</span>
        </button>
      </div>
    </motion.form>
  );
}
