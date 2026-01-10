import { CaseStudyMedia } from "@/data/caseStudies";
import Image from 'next/image';

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

  return <Image src={media.src} alt={alt || "Media"} fill className={className} />;
}
