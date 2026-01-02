export const caseStudyData: Record<string, {
    shortDescription: string;
    coreProblem: string;
    industry: string;
    location: string;
    companySize: string;
    challengeDescription: string;
    whatWeDidDescription: string;
    resultsDescription: string;
    results: { title: string; description: string }[];
}> = {
    "Airbills pay": {
        shortDescription: "fintech startup helping SMEs manage cashflow",
        coreProblem: "difficulty in managing invoices and payments efficiently",
        industry: "Fintech",
        location: "Germany",
        companySize: "50-100 employees",
        challengeDescription: "Airbills Pay was struggling with a fragmented user interface that made onboarding slow and confusing for new users. Their existing platform felt outdated and didn't reflect the speed of their fintech solutions.",
        whatWeDidDescription: "We conducted discovery sessions, redesigned the UX flow for better clarity, optimized the UI with a cohesive design system, and delivered a prototype in just 3 weeks.",
        resultsDescription: "Sprinten's sprint delivered tangible improvements that empowered Airbills Pay to ship smarter and faster, building trust with users and showcasing their fintech solutions.",
        results: [
            { title: "Improved user onboarding", description: "New flows reduced friction, helping first-time users quickly understand and adopt the platform." },
            { title: "Increased user engagement", description: "Consistent design and a component library created a scalable, high-quality experience that strengthens trust." },
            { title: "Higher early adoption", description: "Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned Airbills Pay as a credible, professional product in the market." }
        ]
    },
    "AI platform": {
        shortDescription: "AI-powered platform for on-chain solutions",
        coreProblem: "interface didn't match the speed and intelligence of the underlying tech",
        industry: "Blockchain/AI",
        location: "USA",
        companySize: "20-50 employees",
        challengeDescription: "Sprintin AI's product experience didn't reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.",
        whatWeDidDescription: "We performed user research, streamlined the navigation, created a consistent UI library, and delivered a high-quality prototype quickly.",
        resultsDescription: "Sprinten's sprint delivered tangible improvements that empowered Sprintin AI to ship smarter and faster, building trust with users and showcasing the platform's AI-onchain power.",
        results: [
            { title: "Smooth Onboarding & Engagement", description: "New flows reduced friction, helping first-time users quickly understand and adopt the platform." },
            { title: "Cohesive, Premium UI", description: "Consistent design and a component library created a scalable, high-quality experience that strengthens trust." },
            { title: "Measurable Business Impact", description: "Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned Sprintin AI as a credible, professional product in the market." }
        ]
    }
};