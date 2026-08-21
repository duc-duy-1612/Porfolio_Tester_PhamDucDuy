import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    // Paste your Formspree endpoint URL below
    const FORMSPREE_URL = "https://formspree.io/f/xdenbyoy"; 

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-xl text-center h-full min-h-[300px] shadow-sm" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
        <CheckCircle2 size={48} style={{ color: '#10b981', marginBottom: '16px' }} />
        <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Message Sent!</h4>
        <p style={{ color: 'var(--text-muted)' }}>
          Thank you for reaching out. I will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="button button--secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-xl h-full shadow-sm" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 text-red-400 bg-red-900/20 rounded-md mb-2">
          <AlertCircle size={18} />
          <span className="text-sm">Something went wrong. Please try again later.</span>
        </div>
      )}
      
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-colors"
          style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text)', outlineColor: 'var(--primary)' }}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-colors"
          style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text)', outlineColor: 'var(--primary)' }}
          placeholder="your.email@example.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold" style={{ color: 'var(--text)' }}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-colors resize-none"
          style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border)', color: 'var(--text)', outlineColor: 'var(--primary)' }}
          placeholder="How can I help you?"
        ></textarea>
      </div>
      
      {/* Honeypot to prevent spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="button button--primary mt-2 flex items-center justify-center gap-2 w-full"
        style={status === "loading" ? { opacity: 0.7, cursor: "not-allowed" } : {}}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        {!status.includes("loading") && <Send size={18} />}
      </button>
    </form>
  );
}
