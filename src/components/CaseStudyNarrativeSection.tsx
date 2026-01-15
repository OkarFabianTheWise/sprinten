import { CaseStudySection } from "@/data/caseStudies";
import { MediaBlock } from "./MediaBlock";

interface CaseStudyNarrativeSectionProps {
  title: string;
  theme?: "dark" | "light";
  section: CaseStudySection;
  imagePosition?: "left" | "right";
}

export function CaseStudyNarrativeSection({
  title,
  theme = "dark",
  section,
  imagePosition = "right",
}: CaseStudyNarrativeSectionProps) {
  const isDark = theme === "dark";
  const textColor = isDark ? "text-[#B1BFBF]" : "text-[#8CA1A0]";
  const headingColor = isDark ? "text-[#A2F7B4]" : "text-[#021514]";
  const bgColor = isDark ? "bg-[#021514]" : "bg-[#E5F9E0]";

  return (
    <div className={`w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 ${bgColor}`}>
      <div className="w-full mx-auto flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">
        {/* Text Column */}
        <div
          className={`w-full lg:w-[46%] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 ${
            imagePosition === "right" ? "order-1" : "order-2 lg:order-1"
          }`}
        >
          <div className="flex flex-col gap-3 lg:gap-4">
            <h2
              className={`font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] ${headingColor}`}
            >
              {title}
            </h2>

            <p
              className={`font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] ${textColor}`}
            >
              {section.summary}
            </p>
          </div>

          {/* Bullets List */}
          <ul className="flex flex-col gap-3">
            {section.bullets.map((bullet, index) => (
              <li key={index} className={`flex gap-3 text-sm ${textColor}`}>
                <span className="flex-shrink-0">—</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Column */}
        {section.media && (
          <div
            className={`w-full lg:w-[54%] ${
              imagePosition === "right" ? "order-2 lg:order-2" : "order-1 lg:order-2"
            }`}
          >
            <div className="w-full relative rounded-lg overflow-hidden sm:h-[400px] lg:h-[500px]" style={{ paddingBottom: 'clamp(300px, 100vw, 500px)' }}>
              <MediaBlock media={section.media} alt={title} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
