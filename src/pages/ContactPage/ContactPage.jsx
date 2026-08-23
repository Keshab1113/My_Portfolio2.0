import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaLocationDot, FaWhatsapp, FaLinkedin, FaPaperPlane } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const getFriendlyError = (error) => {
    const text = error?.text || error?.message || String(error);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return 'Email service is not configured. Please check your .env file.';
    }

    if (text.includes('Account not found')) {
      return 'Email service account not found. Please verify your EmailJS public key and account status.';
    }

    if (text.includes('service ID') || text.includes('Service ID')) {
      return 'Invalid email service ID. Please verify your EmailJS service ID.';
    }

    if (text.includes('template ID') || text.includes('Template ID')) {
      return 'Invalid email template ID. Please verify your EmailJS template ID.';
    }

    return 'Something went wrong sending your message. Please try again.';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ kind: 'err', text: 'Email service is not configured. Please check your .env file.' });
      setSending(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          setStatus({ kind: 'ok', text: 'Message sent successfully. I will get back to you soon!' });
          form.current.reset();
        },
        (error) => {
          setStatus({ kind: 'err', text: getFriendlyError(error) });
          console.log('FAILED...', error);
        }
      )
      .finally(() => setSending(false));
  };

  const channels = [
    { icon: <FaLocationDot />, color: 'text-rose-400', title: 'Location', value: 'Kalyani, West Bengal, India' },
    { icon: <HiOutlineMail />, color: 'text-indigo-400', title: 'Email', value: 'keshabdas2003@gmail.com', href: 'mailto:keshabdas2003@gmail.com' },
    { icon: <FaWhatsapp />, color: 'text-emerald-400', title: 'WhatsApp', value: '+91 9547019555', href: 'https://wa.me/919547019555' },
    { icon: <FaLinkedin />, color: 'text-sky-400', title: 'LinkedIn', value: 'keshab-das-6a84ab234', href: 'https://www.linkedin.com/in/keshab-das-6a84ab234/' },
  ];

  return (
    <div className="relative md:pt-10 pt-5">
      <Helmet>
        <title>Contact — Keshab Das</title>
        <meta
          name="description"
          content="Get in touch with Keshab Das — Software Engineer & Web Developer. Reach out for internships, freelance, or full-time opportunities."
        />
      </Helmet>

      {/* Header */}
      <section className="section pb-10">
        <div className="max-w-3xl">
          <span className="heading-eyebrow">Get in touch</span>
          <h1 className="heading-display heading-xl mt-3">
            Let's build <span className="gradient-text">something great</span>.
          </h1>
          <p className="mt-5 text-slate-300 leading-relaxed max-w-2xl">
            I'm available for freelance, internships, and full-time opportunities
            as a Software Engineer. Drop a message and I'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="section pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href || '#'}
                target={c.href ? '_blank' : undefined}
                rel="noreferrer"
                className="card-dark p-5 flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-lg ${c.color} group-hover:border-cyan-400/40 transition-colors`}>
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">{c.title}</p>
                  <p className="text-slate-200 text-sm font-medium truncate">{c.value}</p>
                </div>
                <span className="text-slate-500 group-hover:text-cyan-300 transition-colors">↗</span>
              </a>
            ))}

            <div className="card-dark p-5">
              <span className="heading-eyebrow">Availability</span>
              <p className="text-slate-300 text-sm mt-2">
                Open to <span className="text-white font-semibold">internships</span>, <span className="text-white font-semibold">freelance</span> and <span className="text-white font-semibold">full-time</span> roles.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Currently accepting new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 card-dark p-6 sm:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">Your Name</label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="John Doe"
                  autoComplete="off"
                  required
                  className="mt-1.5 w-full bg-ink-900/80 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none py-3 px-4 rounded-xl text-slate-100 placeholder:text-slate-500 transition"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  autoComplete="off"
                  required
                  className="mt-1.5 w-full bg-ink-900/80 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none py-3 px-4 rounded-xl text-slate-100 placeholder:text-slate-500 transition"
                />
              </div>
            </div>
            <div>
              <label className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                autoComplete="off"
                className="mt-1.5 w-full bg-ink-900/80 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none py-3 px-4 rounded-xl text-slate-100 placeholder:text-slate-500 transition"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono uppercase tracking-widest text-cyan-300/80">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project, idea, or opportunity…"
                autoComplete="off"
                required
                rows={6}
                className="mt-1.5 w-full bg-ink-900/80 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 outline-none py-3 px-4 rounded-xl text-slate-100 placeholder:text-slate-500 transition resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending…' : (<>Send Message <FaPaperPlane size={14} /></>)}
              </button>
              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.kind === 'ok' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
