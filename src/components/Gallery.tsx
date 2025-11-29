"use client";

import React, { useLayoutEffect, useRef, useMemo } from "react";

/* -------------------------------------------------------------------------- */
/*                                MARQUEE ROW                                 */
/* -------------------------------------------------------------------------- */
interface MarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  images,
  direction = "left",
  speed = 40,
}) => {
  const validImages = useMemo(
    () =>
      images.filter(
        (src) => src && typeof src === "string" && !src.includes("Marquee Image")
      ),
    [images]
  );

  const marqueeImages = [...validImages, ...validImages];
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div className="relative flex overflow-hidden select-none group px-2">
      <div
        className="flex items-center animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection,
        }}
      >
        {marqueeImages.map((src, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              w-[75vw]     /* Mobile */
              sm:w-[55vw]  /* Small screens */
              md:w-[38vw]  /* Tablets */
              lg:w-[26vw]  /* Laptops */
              xl:w-[20vw]  /* Large screens */

              mx-3 aspect-[16/9]
              bg-gray-800 rounded-xl overflow-hidden shadow-lg
              transition-all duration-300
              hover:scale-[1.03]
            "
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="
                w-full h-full object-cover
                transition-transform duration-500 ease-[cubic-bezier(0.65,0.05,0.36,1)]
              "
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                        3D MARQUEE GALLERY SECTION                          */
/* -------------------------------------------------------------------------- */
const GalleryMarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);

  /* ------------------------- GSAP Scroll 3D Tilt ------------------------- */
  useLayoutEffect(() => {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap || !ScrollTrigger || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1.5,
      },
    });

    /* Responsive 3D transforms */
    const isMobile = window.innerWidth < 768;

    gsap.set(marqueeContainerRef.current, {
      rotateX: isMobile ? 15 : 45,
      scale: isMobile ? 0.95 : 0.85,
      y: isMobile ? "-5vh" : "-15vh",
      autoAlpha: 0.6,
    });

    tl.to(marqueeContainerRef.current, {
      rotateX: 0,
      scale: 1,
      y: 0,
      autoAlpha: 1,
      duration: 1.2,
      ease: "power2.out",
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  /* -------------------------- IMAGE ASSETS -------------------------- */
  const allImages: string[] = [
    "/assets/sm1.jpg",
    "/assets/att.jpg",
    "/assets/sock.jpg",
    "/assets/c1.jpg",
    "/assets/ch1.jpg",
    "/assets/g4.png",
    "/assets/screenshot-2023-05-18-033647.png",
    "/assets/screenshot-2023-05-18-033710.png",
    "/assets/screenshot-2023-05-19-041052.png",
    "/assets/img_2215.jpg",
    "/assets/p1.jpg",
    "/assets/meg1.jpg",
    "/assets/p2.jpg",
    "/assets/p3.jpg",
    "/assets/img_0670.jpg",
    "/assets/img_0661.jpg",
    "/assets/dr1.JPG",
    "/assets/img_1101.jpg",
    "/assets/con10.jpg",
    "/assets/con11.jpg",
    "/assets/con12.jpg",
    "/assets/con13.jpg",
    "/assets/con14.jpg",
    "/assets/con2.jpg",
    "/assets/con3.jpg",
    "/assets/con4.jpg",
    "/assets/con5.jpg",
    "/assets/con6.jpg",
    "/assets/con7.jpg",
    "/assets/con8.jpg",
    "/assets/con9.jpg",
    "/assets/con1.jpeg",
    "/assets/screenshot-2023-05-19-041117.png",
    "/assets/screenshot-2023-11-05-171409.png",
    "/assets/v3.png",
    "/assets/v6.png",
    "/assets/v7.png",
    "/assets/v8.png",
    "/assets/w2.png",
    "/assets/ph1.jpg",
    "/assets/ph2.jpeg",
    "/assets/1.JPG",
    "/assets/2.JPG",
    "/assets/3.JPG",
    "/assets/conf1.jpg",
    "/assets/5.JPG",
    "/assets/6.JPG",
    "/assets/7.JPG",
    "/assets/8.JPG",
    "/assets/9.JPG",
    "/assets/10.JPG",
    "/assets/11.JPG",
  ];

  /* Split evenly into 4 marquee rows */
  const rows: string[][] = useMemo(() => {
    const quarter = Math.ceil(allImages.length / 4);
    return [
      allImages.slice(0, quarter),
      allImages.slice(quarter, 2 * quarter),
      allImages.slice(2 * quarter, 3 * quarter),
      allImages.slice(3 * quarter),
    ];
  }, [allImages]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-background overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />

      {/* Title + Subtitle */}
      <div className="relative z-10 container mx-auto px-4 text-center mb-14 sm:mb-16 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">Moments</span>{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            in Motion
          </span>
        </h2>

        <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto px-3">
          A seamless flow of captured memories — authentic, vivid, and full of life.
        </p>
      </div>

      {/* Marquee Rows */}
      <div
        ref={marqueeContainerRef}
        className="relative z-10 flex flex-col gap-8 sm:gap-10"
      >
        <Marquee images={rows[0]} direction="left" speed={45} />
        <Marquee images={rows[1]} direction="right" speed={50} />
        <Marquee images={rows[2]} direction="left" speed={55} />
        <Marquee images={rows[3]} direction="right" speed={60} />
      </div>
    </section>
  );
};

export default GalleryMarqueeSection;
