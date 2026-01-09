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
    shortDescription: string;
    coreProblem: string;
    industry: string;
    location: string;
    companySize: string;
    challenge: CaseStudySection;
    whatWeDid: CaseStudySection;
    resultsDescription: string;
    results: { title: string; description: string }[];
    media: {
        hero: CaseStudyMedia;
        clientOverview: CaseStudyMedia;
    };
}

export const caseStudyData: Record<string, CaseStudyEntry> = {
    "Airbills pay": {
        shortDescription: "fintech startup helping SMEs manage cashflow",
        coreProblem: "inefficient invoice and payment workflows",
        industry: "Fintech",
        location: "Germany",
        companySize: "50–100 employees",
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
                src: "/case-studies/airbills/hero.jpg",
            },
            clientOverview: {
                type: "image",
                src: "/case-studies/airbills/overview.jpg",
            },
        },
    },
    Veloo: {
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
                src: "/case-studies/veloo/challenge.jpg",
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
        resultsDescription:
            "Sprinten's sprint delivered tangible improvements that empowered Veloo to ship smarter and faster, building trust with users and showcasing their platform's power.",
        results: [
            {
                title: "Brand Strategy & Positioning",
                description:
                    "Clear identity and messaging that positioned Veloo as the trusted local platform, differentiating it from competitors.",
            },
            {
                title: "Cohesive, Premium UI",
                description:
                    "Consistent design system and component library created a scalable, high-quality experience that strengthens user trust.",
            },
            {
                title: "Measurable Business Impact",
                description:
                    "Stronger brand foundation drove higher early adoption, increased engagement, and enabled confident expansion into new markets.",
            },
        ],
        media: {
            hero: {
                type: "image",
                src: "/case-studies/veloo/hero.jpg",
            },
            clientOverview: {
                type: "image",
                src: "/case-studies/veloo/overview.jpg",
            },
        },
    },
};