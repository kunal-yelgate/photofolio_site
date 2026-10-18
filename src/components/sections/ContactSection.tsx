"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Mail, FileText, Copy, Check, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"idle" | "prepared">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoUrl = `mailto:${profileData.links.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("prepared");
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 border-b-2 border-[#171717] bg-[#F6F0E5] bg-ivory-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          tag="COMMUNICATION CHANNELS"
          title="GET IN TOUCH"
          subtitle="Open for software engineering internships, technical collaborations, and discussions on backend architecture and developer tooling."
          accentColor="coral"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Connection Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#171717] space-y-4">
              <span className="font-mono text-xs text-[#3155E7] font-black uppercase tracking-wider bg-[#E7DEFF] px-2 py-0.5 border border-[#171717]">
                // DIRECT INBOX
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#171717] font-sans">
                Let&apos;s Build Something Resilient
              </h3>
              <p className="text-zinc-700 text-sm font-sans leading-relaxed font-medium">
                Whether you have an internship opening, want to discuss an open-source collaboration,
                or have questions about my projects (RepoLens, TrueRecruit), feel free to reach out.
              </p>

              {/* Copyable Email Card */}
              <div className="border-2 border-[#171717] bg-[#FAF8F4] p-3.5 flex items-center justify-between font-mono text-xs shadow-[2px_2px_0px_0px_#171717]">
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                  <Mail className="w-4 h-4 text-[#3155E7] shrink-0" />
                  <span className="text-[#171717] font-bold truncate">
                    {profileData.links.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1 bg-[#FFFFFF] border-2 border-[#171717] hover:bg-[#C8FF00] text-[#171717] font-bold transition-all shrink-0 flex items-center gap-1 shadow-[1.5px_1.5px_0px_0px_#171717] active:translate-x-0.5 active:translate-y-0.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Professional Network Links */}
              <div className="pt-2 space-y-2.5 font-mono text-xs">
                <a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border-2 border-[#171717] bg-[#FAF8F4] hover:bg-[#C8FF00] transition-colors shadow-[2px_2px_0px_0px_#171717]"
                >
                  <span className="flex items-center gap-2 text-[#171717]">
                    <GithubIcon className="w-4 h-4" />
                    <span className="font-black">GitHub / kunal-yelgate</span>
                  </span>
                  <span className="font-bold text-[#171717]">&rarr;</span>
                </a>

                <a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border-2 border-[#171717] bg-[#FAF8F4] hover:bg-[#3155E7] hover:text-white transition-colors shadow-[2px_2px_0px_0px_#171717] group"
                >
                  <span className="flex items-center gap-2 text-inherit">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="font-black">LinkedIn / kunal-yelgate</span>
                  </span>
                  <span className="font-bold text-inherit">&rarr;</span>
                </a>

                <a
                  href={profileData.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 border-2 border-[#171717] bg-[#FAF8F4] hover:bg-[#FF7048] hover:text-white transition-colors shadow-[2px_2px_0px_0px_#171717]"
                >
                  <span className="flex items-center gap-2 text-inherit">
                    <FileText className="w-4 h-4" />
                    <span className="font-black">Download Resume (PDF)</span>
                  </span>
                  <span className="font-bold text-inherit">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#171717]">
              <div className="flex items-center justify-between border-b-2 border-[#171717] pb-4 mb-6">
                <div>
                  <h4 className="font-mono text-sm font-black uppercase tracking-wider text-[#171717]">
                    DIRECT DISPATCH CONSOLE
                  </h4>
                  <p className="font-mono text-xs text-zinc-500 font-medium">
                    Prepares client mail transport or direct mailto
                  </p>
                </div>
                <span className="tactile-led tactile-led-green" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[#171717] font-black uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Recruiter"
                      className="w-full p-3 bg-[#FAF8F4] border-2 border-[#171717] text-[#171717] font-sans font-medium focus:outline-none focus:bg-white focus:border-[#3155E7] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[#171717] font-black uppercase">
                      YOUR EMAIL *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full p-3 bg-[#FAF8F4] border-2 border-[#171717] text-[#171717] font-sans font-medium focus:outline-none focus:bg-white focus:border-[#3155E7] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[#171717] font-black uppercase">
                    SUBJECT / ROLE *
                  </label>
                  <input
                    id="subject"
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="SDE Internship / RepoLens Discussion"
                    className="w-full p-3 bg-[#FAF8F4] border-2 border-[#171717] text-[#171717] font-sans font-medium focus:outline-none focus:bg-white focus:border-[#3155E7] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[#171717] font-black uppercase">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, problem, or role requirements..."
                    className="w-full p-3 bg-[#FAF8F4] border-2 border-[#171717] text-[#171717] font-sans font-medium focus:outline-none focus:bg-white focus:border-[#3155E7] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? "Dispatching..." : "Launch Email Client & Send"}
                  </Button>
                </div>

                {submittedStatus === "prepared" && (
                  <div className="p-3 bg-[#C8FF00]/30 border-2 border-[#171717] text-[#171717] font-bold mt-3">
                    &gt; Client mail dispatched. If your mail client did not open automatically, please send directly to{" "}
                    <a href={`mailto:${profileData.links.email}`} className="underline font-black text-[#3155E7]">
                      {profileData.links.email}
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
