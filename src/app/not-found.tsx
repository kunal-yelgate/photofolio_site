import Link from "next/link";
import { ArrowLeft, AlertOctagon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-[#F6F0E5] bg-ivory-grid">
      <div className="max-w-md w-full border-2 border-[#171717] bg-[#FFFFFF] p-8 shadow-[6px_6px_0px_0px_#171717] text-center space-y-6">
        <div className="w-14 h-14 mx-auto bg-[#FF7048] border-2 border-[#171717] text-white flex items-center justify-center shadow-[3px_3px_0px_0px_#171717]">
          <AlertOctagon className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FF7048] font-black uppercase tracking-widest bg-[#FF7048]/10 px-2 py-0.5 border border-[#171717]">
            ERROR 404 // ROUTE NOT FOUND
          </span>
          <h1 className="text-3xl font-black uppercase text-[#171717] font-sans pt-1">
            TARGET UNRESOLVED
          </h1>
          <p className="text-zinc-700 text-sm font-sans leading-relaxed font-medium">
            The requested resource path does not exist in the active workstation manifest.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8FF00] text-[#171717] font-black font-mono text-xs uppercase border-2 border-[#171717] shadow-[3px_3px_0px_0px_#171717] hover:bg-[#bbf200] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Station Root</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
