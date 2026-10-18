"use client";

import React from "react";
import { educationData } from "@/data/education";
import { certificationsData } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 border-b-2 border-[#171717] bg-[#F6F0E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          tag="ACADEMIC &amp; CREDENTIALS"
          title="EDUCATION &amp; CERTIFICATIONS"
          subtitle="Undergraduate curriculum at SGGSIE&T and verified industry skill certifications in software engineering, AI, and systems."
          accentColor="violet"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-sm font-black uppercase tracking-wider text-[#171717] flex items-center gap-2">
              <span className="p-1.5 bg-[#3155E7] text-white border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717]">
                <GraduationCap className="w-4 h-4" />
              </span>
              FORMAL ACADEMIC DEGREE
            </h3>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="border-2 border-[#171717] bg-[#FFFFFF] p-6 sm:p-8 shadow-[5px_5px_0px_0px_#171717] space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#171717] pb-4">
                  <div>
                    <h4 className="text-2xl font-black text-[#171717] font-sans">
                      {edu.degree}
                    </h4>
                    <p className="font-mono text-sm text-[#3155E7] font-bold mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-600 font-mono mt-0.5 font-medium">
                      {edu.location}
                    </p>
                  </div>
                  <Badge variant="lime" size="md">
                    {edu.period}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm text-zinc-800 font-sans font-medium leading-relaxed">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="flex items-start gap-2">
                      <span className="text-[#3155E7] font-mono font-bold mt-0.5">&gt;</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t-2 border-[#171717]">
                  <p className="font-mono text-xs font-black uppercase tracking-wider text-[#171717] mb-2.5">
                    CORE COURSEWORK:
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 bg-[#FAF8F4] border border-[#171717] text-[#171717] font-bold text-[11px] shadow-[1px_1px_0px_0px_#171717]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-sm font-black uppercase tracking-wider text-[#171717] flex items-center gap-2">
              <span className="p-1.5 bg-[#FF7048] text-white border-2 border-[#171717] shadow-[2px_2px_0px_0px_#171717]">
                <Award className="w-4 h-4" />
              </span>
              VERIFIED CERTIFICATIONS ({certificationsData.length})
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="border-2 border-[#171717] bg-[#FFFFFF] p-4 shadow-[3px_3px_0px_0px_#171717] hover:border-[#3155E7] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[10px] text-[#3155E7] font-black uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500 font-bold">
                        {cert.date}
                      </span>
                    </div>
                    <h5 className="font-sans font-bold text-sm text-[#171717] leading-snug">
                      {cert.title}
                    </h5>
                  </div>

                  <div className="mt-3 pt-2 border-t border-zinc-200 flex flex-wrap gap-1 font-mono text-[9px] text-zinc-700 font-bold">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-1.5 py-0.5 bg-[#FAF8F4] border border-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
