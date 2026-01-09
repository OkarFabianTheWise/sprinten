import { CaseStudyMedia } from "@/data/caseStudies";

export function MediaBlock({
  media,
  alt,
  className = "w-full h-full object-cover",
}: {
  media: CaseStudyMedia;
  alt?: string;
  className?: string;
}) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      />
    );
  }

  return <img src={media.src} alt={alt || "Media"} className={className} />;
}
