import {
  audiences,
  heroCopy,
  navLinks,
  pillars,
  projects,
  services,
  testimonial,
  whySprinten
} from "@/data/content";

const shimmer =
  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-60%] before:animate-[shine_6s_linear_infinite]";

export function HeroSection() {
  return (
    <section className="-mt-6 w-screen relative left-1/2 -translate-x-1/2">
      {/* Full-bleed container centered and sized to viewport width */}
      <div
        className="
          hero-shell
          relative
          w-full max-w-none
          h-[192px]
          overflow-hidden
          rounded-[32px]
          border border-[#03211d]
          shadow-glow-green
          bg-[#001512]
          m-0 p-0
        "
      >
        <div className="flex h-full items-center justify-between gap-10 px-8">
          {/* Left text */}
          <div className="w-[379px] h-[192px] space-y-2">
            <h1 className="font-poly-sans text-5xl leading-tight text-[#A2F7B4]">
              Ship Faster.
              <br />
              Build Better.
              <br />
              Onchain.
            </h1>
          </div>

          {/* Right column */}
          <div className="w-[437px] relative flex flex-col items-start justify-center space-y-4 text-white">
            <p className="text-lg text-[#DFFFE2]">
              Sprinten helps Solana founders and developers launch market-ready products in weeks, not months.
            </p>

            {/* Button */}
            <button
              className="
                relative flex items-center 
                w-[200px] h-[40px]
                rounded-[8px]
                gap-[24px]
                px-[12px]
                transition-all 
                duration-500 
                ease-out 
                hover:translate-y-[-1px]
              "
              aria-label="Start a Sprint"
            >
              <span
                className="
                  flex items-center justify-center 
                  w-[40px] h-[40px] 
                  rounded-full 
                  bg-[#1F7E77]
                "
              >
                <span
                  className="
                    text-white 
                    leading-none
                    font-bold
                    text-[16px]
                    select-none
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              </span>

              <span className="text-white text-sm font-semibold whitespace-nowrap">
                Start a Sprint
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 w-full">
          <HeroLogoCard />
        </div>
      </div>
    </section>
  );
}

function HeroLogoCard() {
  return (
    <div className="hero-logo-card flex h-[312px] w-full items-center justify-center rounded-[16px] bg-[#E5F9E0] text-[#1F8E87] shadow-inner">
      <span className="font-display text-[140px] leading-none tracking-tight">Sprinten</span>
    </div>
  );
}

export function WhySection() {
  return (
    <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="glass-panel relative overflow-hidden rounded-[32px] border-white/10 p-10">
        <p className="text-sm tracking-[0.5em] text-secondary-300">{whySprinten.label}</p>
        <h2 className="mt-6 font-display text-4xl text-white">{whySprinten.title}</h2>
        <p className="mt-4 text-lg text-primary-100">{whySprinten.description}</p>
        <div className="noise-overlay absolute inset-0 opacity-20" />
      </div>
      <div className="space-y-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="glass-panel rounded-3xl border-white/10 p-6 shadow-glow-green transition hover:border-primary-100/40"
          >
            <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
            <p className="mt-3 text-primary-50">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-black/30 p-10 shadow-glow-purple">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm tracking-[0.5em] text-secondary-300">OUT SERVICES</p>
          <h2 className="mt-4 font-display text-4xl text-white">
            Everything You Need to Launch. Nothing You Don’t.
          </h2>
          <p className="mt-4 max-w-2xl text-primary-50">
            Sprinten delivers the core design, frontend, and strategy you need to ship a real product
            — fast. No bloated packages. No slow handoffs. Just focused execution built for founders
            and developers.
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${service.accent} p-6 text-white`}
          >
            <span className="text-xs uppercase tracking-[0.35em] text-white/70">{service.badge}</span>
            <h3 className="mt-4 font-display text-3xl">{service.title}</h3>
            <p className="mt-3 text-primary-50">{service.description}</p>
            <div className={`absolute inset-0 ${shimmer}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkSection() {
  const chunked = chunkProjects(projects, 2);
  return (
    <section className="mt-16 space-y-8">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm tracking-[0.5em] text-secondary-300">OUR WORK</p>
        <h2 className="font-display text-4xl text-white">Products We’ve Shipped, Fast.</h2>
        <p className="mx-auto max-w-3xl text-primary-50">
          A look at the real products, MVPs, dashboards, and frontends we’ve delivered for founders
          and developers across the Solana ecosystem.
        </p>
      </div>
      <div className="space-y-6">
        {chunked.map((pair, idx) => (
          <div key={idx} className="grid gap-6 lg:grid-cols-2">
            {pair.map((project) => (
              <div
                key={project.title}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${project.accent} p-6 text-white`}
              >
                <div className="flex items-center justify-between text-sm text-primary-100">
                  <span>{project.category}</span>
                  <span className="font-mono uppercase tracking-[0.3em]">{project.duration}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl text-white">{project.title}</h3>
                <div className="mt-6 h-48 rounded-2xl border border-white/10 bg-black/20">
                  <div className="grid h-full place-content-center text-primary-100">
                    High-fidelity surfaces
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white">
          See all work
        </button>
      </div>
    </section>
  );
}

function chunkProjects<T>(list: T[], size: number) {
  const groups: T[][] = [];
  for (let i = 0; i < list.length; i += size) {
    groups.push(list.slice(i, i + size));
  }
  return groups;
}

export function AudienceSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-black/50 p-10 shadow-glow-green">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm tracking-[0.5em] text-secondary-300">WHO WE SERVE</p>
        <h2 className="font-display text-4xl text-white">
          Built for Founders. Designed for Developers. Ready for Anyone Shipping Onchain.
        </h2>
        <p className="mx-auto max-w-3xl text-primary-50">
          Sprinten supports the people building the next generation of Solana products — whether
          you’re writing smart contracts, shaping a new startup, or taking an idea to market.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {audiences.map((audience) => (
          <div
            key={audience.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-inner"
          >
            <h3 className="font-display text-2xl text-white">{audience.title}</h3>
            <p className="mt-3 text-primary-50">{audience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-primary-900 p-10">
      <p className="text-sm tracking-[0.5em] text-secondary-300">TESTIMONIAL</p>
      <blockquote className="mt-6 font-display text-4xl text-white">{testimonial.quote}</blockquote>
      <div className="mt-6 text-primary-100">
        <p className="text-xl text-white">{testimonial.author}</p>
        <p className="text-sm tracking-[0.3em] uppercase">{testimonial.role}</p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-primary-100/10 p-10 text-center shadow-glow-green">
      <h2 className="font-display text-4xl text-white">Ready to Ship Faster?</h2>
      <p className="mt-4 text-primary-50">
        Let’s turn your idea, prototype, or draft UI into a real product — designed, built, and
        ready for users.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
          Book a call
        </button>
        <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
          Start a sprint
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 flex flex-col items-center gap-6 rounded-[32px] border border-white/10 bg-black/40 p-8 text-center text-primary-100">
      <div className="font-display text-3xl text-white">Sprinten</div>
      <p>© {new Date().getFullYear()} Sprinten — All rights reserved</p>
    </footer>
  );
}

