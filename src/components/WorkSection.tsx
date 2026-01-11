"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/content";

// Mapping project titles to images
const PROJECT_IMAGES: Record<string, string> = {
  "Airbills Pay": "/airbills.png",
  "Veloo": "/veloo-hero.png",
  "Nexus Protocol": "/aiplatform.png",
  "Synapse Dev Kit": "/design.png",
};

export function WorkSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openGallery = (index: number) => setSelectedIndex(index);
  const closeGallery = () => setSelectedIndex(null);

  const nextProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="work" className="relative bg-[#E5F9E0] px-0 overflow-x-clip">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:max-w-none lg:mx-0 lg:ml-[40px] lg:mr-[40px] lg:px-0 py-14 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#858BE3] text-sm font-medium tracking-[0.2em] mb-4 uppercase">
            OUR WORK
          </p>

          <h1 className="font-[400] text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.25px] text-[#021514] overflow-hidden">
            Products We've Shipped, Fast.
          </h1>

          <p className="mt-4 font-[400] text-base leading-6 tracking-[0.5px] text-[#8CA1A0] max-w-3xl mx-auto overflow-hidden">
            A look at the real products, MVPs, dashboards, and frontends we've
            delivered for founders and developers across the Solana ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#E5F9E0] overflow-hidden rounded-[8px] cursor-pointer hover:shadow-lg transition-shadow" onClick={() => openGallery(idx)}>
              {/* Image */}
              <img
                src={PROJECT_IMAGES[project.title] || "/default-project.png"}
                alt={project.title}
                className="w-full aspect-[16/9] object-cover bg-gray-100"
              />

              {/* Text block */}
              <div className="py-3">
                <h3 className="text-[16px] leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center text-[14px] leading-[24px] text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link href="/allwork">
            <div className="px-8 py-3 border-2 border-teal-500 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors">
              See all work
            </div>
          </Link>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeGallery}>
          <div className="relative max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              ×
            </button>

            {/* Prev button */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
            >
              ‹
            </button>

            {/* Next button */}
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10"
            >
              ›
            </button>

            {/* Image */}
            <motion.img
              src={PROJECT_IMAGES[projects[selectedIndex].title] || "/default-project.png"}
              alt={projects[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Info */}
            <div className="bg-white p-4">
              <h3 className="text-xl font-semibold text-[#021514]">{projects[selectedIndex].title}</h3>
              <p className="text-gray-600">{projects[selectedIndex].category}</p>
              <p className="text-sm text-gray-500 flex items-center mt-2">
                <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
                {projects[selectedIndex].duration}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}