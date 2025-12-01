import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-[1360px] h-[52px]">
        {/* logo - keep as flex-none so it doesn't stretch */}
        <div className="flex items-center gap-4 text-[#021514] flex-none pl-10">
          <Image src="/headerlogo.png" alt="Sprinten" width={172} height={42} />
        </div>

        {/* center nav - use flex-1 + justify-center to center items */}
        <nav className="hidden sm:flex flex-1 items-center justify-center h-[16px] gap-[40px]">
          <button className="text-[12px] leading-[16px] tracking-[0.5px] text-center font-semibold">
            Work
          </button>
          <button className="text-[12px] leading-[16px] tracking-[0.5px] text-center font-semibold">
            Services
          </button>
          <button className="text-[12px] leading-[16px] tracking-[0.5px] text-center font-semibold">
            About
          </button>
        </nav>

        {/* CTA - keep as flex-none to avoid stretching */}
        <div className="flex-none pr-10">
          <button
            className="flex items-center justify-center rounded-[8px] text-white transition hover:bg-[#0b8b6c] bg-[#2F9C96] w-[158px] h-[38px] gap-2"
            aria-label="Book a call"
          >
            <span className="text-[14px] font-semibold">Book a call</span>
          </button>
        </div>
      </div>
    </header>
  );
}
