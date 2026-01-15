// src/data/caseStudies.ts

export type CaseStudyMedia = {
    type: "image" | "video";
    src: string;
    poster?: string;
};

export type CaseStudySection = {
    summary: string;
    bullets: string[];
    media?: CaseStudyMedia;
};

export interface CaseStudyEntry {
    icon: string;
    duration: string;
    shortDescription: string;
    coreProblem: string;
    industry: string;
    location: string;
    companySize: string;
    challenge: CaseStudySection;
    whatWeDid: CaseStudySection;
    keyImpact: string;
    caseStudySubtitle?: string;
    whatWeDidSteps: { title: string; bullets: string[] }[];
    resultsTitle?: string;
    resultsDescription: string;
    results: { title: string; description: string }[];
    media: {
        hero: CaseStudyMedia;
        clientOverview: CaseStudyMedia;
    };
}

export const caseStudyData: Record<string, CaseStudyEntry> = {
    "Airbills pay": {
        icon: "/airbills-icon.svg",
        duration: "3 weeks",
        shortDescription: "fintech startup helping SMEs manage cashflow",
        coreProblem: "inefficient invoice and payment workflows",
        industry: "Fintech",
        location: "Nigeria",
        companySize: "5–10 employees",
        challenge: {
            summary:
                "Airbills Pay faced usability and clarity issues that slowed onboarding and reduced user confidence in their fintech platform.",
            bullets: [
                "Fragmented interface across core payment flows",
                "Confusing onboarding experience for first-time users",
                "Visual design that didn't reflect fintech speed or trust",
            ],
            media: {
                type: "image",
                src: "/case-studies/airbills/challenge.jpg",
            },
        },
        whatWeDid: {
            summary:
                "We redesigned the product experience to prioritize clarity, speed, and trust while enabling rapid iteration and sustainable scaling.",
            bullets: [
                "UX audit and flow simplification across payment workflows",
                "Design system creation for consistency and scalability",
                "High-fidelity prototype delivered in just 3 weeks",
            ],
            media: {
                type: "image",
                src: "/case-studies/airbills/what-we-did.jpg",
            },
        },
        keyImpact: "improved user onboarding and engagement",
        caseStudySubtitle: "Redesigning Airbills Pay's fintech platform to enhance clarity, speed, and trust for SMEs.",
        whatWeDidSteps: [
            {
                title: "Discovery & Alignment",
                bullets: [
                    "Conducted comprehensive UX audit to identify pain points and opportunities",
                    "Analyzed competitive landscape to understand market positioning",
                    "Performed user research to validate assumptions and gather insights",
                ],
            },
            {
                title: "UX Design & Flow Optimization",
                bullets: [
                    "Mapped out user journeys to eliminate friction",
                    "Designed intuitive interfaces for complex workflows",
                    "Optimized information architecture for better findability",
                ],
            },
            {
                title: "UI Design & Branding",
                bullets: [
                    "Created a cohesive design system with reusable components",
                    "Developed a visual identity that conveys trust and professionalism",
                    "Ensured accessibility and inclusive design principles",
                ],
            },
            {
                title: "Prototype & Delivery",
                bullets: [
                    "Built interactive prototypes for user testing",
                    "Delivered production-ready designs with detailed specifications",
                    "Provided design handoff documentation for seamless development",
                ],
            },
        ],
        resultsTitle: "Fast, Clear, and Market-Ready Outcomes.",
        resultsDescription:
            "Sprinten's sprint delivered tangible improvements that empowered Airbills Pay to ship smarter and faster, building trust with users and showcasing their fintech solutions.",
        results: [
            {
                title: "Improved user onboarding",
                description:
                    "New flows reduced friction, helping first-time users quickly understand and adopt the platform.",
            },
            {
                title: "Increased user engagement",
                description:
                    "Consistent design and a component library created a scalable, high-quality experience that strengthens trust.",
            },
            {
                title: "Higher early adoption",
                description:
                    "Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned Airbills Pay as a credible, professional product in the market.",
            },
        ],
        media: {
            hero: {
                type: "image",
                src: "/airbills.png",
            },
            clientOverview: {
                type: "image",
                src: "/client-handshake.jpg",
            },
        },
    },
    Veloo: {
        icon: "/veloo-icon.svg",
        duration: "4 weeks",
        shortDescription: "hyperlocal service and delivery platform",
        coreProblem:
            "lack of a unified way to access nearby stores, services, and delivery",
        industry: "Delivery",
        location: "Nigeria",
        companySize: "20–50 employees",
        challenge: {
            summary:
                "Veloo needed a cohesive platform that unified commerce, services, and mobility into one trusted local experience that could scale beyond its initial campus audience.",
            bullets: [
                "Fragmented user experience across multiple service types",
                "Weak brand identity that didn't inspire local trust",
                "Scalability concerns as the platform grew into new markets",
            ],
            media: {
                type: "image",
                src: "/veloo-overview.png",
            },
        },
        whatWeDid: {
            summary:
                "We created a clear, friendly, and scalable brand identity by unifying Veloo's commerce, service, and mobility offerings into one trusted, locally focused platform.",
            bullets: [
                "Conducted brand strategy and competitive positioning analysis",
                "Designed cohesive UI system for scalability across markets",
                "Created design documentation for rapid replication and growth",
            ],
            media: {
                type: "image",
                src: "/case-studies/veloo/what-we-did.jpg",
            },
        },
        keyImpact: "Build a Trusted Brand Identity",
        caseStudySubtitle: "A Sprinten design sprint case study for a hyperlocal commerce and service platform, focused on solving fragmented offline-local experiences with clear, fast, and effective execution.",
        whatWeDidSteps: [
            {
                title: "Discovery & Alignment",
                bullets: [
                    "Conducted comprehensive brand strategy analysis",
                    "Analyzed competitive landscape for positioning",
                    "Performed user research to understand local needs",
                ],
            },
            {
                title: "UX Design & Flow Optimization",
                bullets: [
                    "Unified user experience across service types",
                    "Designed intuitive interfaces for local commerce",
                    "Optimized flows for mobility and delivery",
                ],
            },
            {
                title: "UI Design & Branding",
                bullets: [
                    "Created a cohesive design system for scalability",
                    "Developed a friendly brand identity that builds trust",
                    "Ensured consistent visual design across markets",
                ],
            },
            {
                title: "Prototype & Delivery",
                bullets: [
                    "Built interactive prototypes for testing",
                    "Delivered production-ready designs",
                    "Provided documentation for rapid replication",
                ],
            },
        ],
        resultsTitle: "Fast, Clear, and Market-Ready Outcomes.",
        resultsDescription:
            "The brand identity design positioned Veloo as a trusted, everyday companion for hyperlocal living. It clearly communicates convenience, reliability, and community, making the platform feel familiar to users while still modern and tech forward.",
        results: [
            {
                title: "Distinct Brand Identity",
                description:
                    "A clear, recognizable identity that differentiates Veloo from generic delivery and ride hailing apps.",
            },
            {
                title: "Local First Trust Positioning",
                description:
                    "Strong local first positioning that builds trust with students, store owners, riders, and service providers.",
            },
            {
                title: "Consistent Visual Experience",
                description:
                    "Visual consistency across app, marketing materials, and partner touchpoints.",
            },
        ],
        media: {
            hero: {
                type: "video",
                src: "/veloo-media.mp4",
                poster: "/veloo-hero.png",
            },
            clientOverview: {
                type: "image",
                src: "/veloo-overview.png",
            },
        },
    },
};