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
    <div className="relative flex overflow-hidden select-none group">
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
            className="flex-shrink-0 w-[45vw] sm:w-[35vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] mx-4 aspect-[16/9] relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.65,0.05,0.36,1)]"
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
/*                        3D MARQUEE GALLERY SECTION                         */
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

    gsap.set(marqueeContainerRef.current, {
      rotateX: 45,
      scale: 0.85,
      y: "-15vh",
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
    "/assets/smart-bin-pic-01_1600x907.jpg",
    "/assets/att.jpg",
    "/assets/sock.jpg",
    "/assets/c1.jpg",
    "/assets/ch1.jpg",
    "/assets/Connect-ROS.png",
    "/assets/Screenshot-2023-05-18-033647.png",
    "/assets/Screenshot-2023-05-18-033710.png",
    "/assets/Screenshot-2023-05-19-041052.png",
    "/assets/IMG_2215.jpg",
    "/assets/p1.jpg",
    "/assets/meg1.jpg",
    "/assets/p2.jpg",
    "/assets/p3.jpg",
    "/assets/IMG_0670.JPG",
    "/assets/IMG_0661.JPG",
    "/assets/IMG_0662.JPG",
    "/assets/IMG_1101.jpg",
    "/assets/con10.JPG",
    "/assets/con11.JPG",
    "/assets/con12.JPG",
    "/assets/con13.JPG",
    "/assets/con14.JPG",
    "/assets/con2.JPG",
    "/assets/con3.JPG",
    "/assets/con4.JPG",
    "/assets/con5.JPG",
    "/assets/con6.JPG",
    "/assets/con7.JPG",
    "/assets/con8.JPG",
    "/assets/con9.JPG",
    "/assets/Con1.JPEG",
    "/assets/Screenshot-2023-05-19-041117.png",
    "/assets/Screenshot-2023-11-05-171409.png",
    "/assets/v3.png",
    "/assets/v6.png",
    "/assets/v7.png",
    "/assets/v8.png",
    "/assets/w2.png",
    "/assets/5E9C2DBF-214B-4370-8295-157C570A8ED5.JPG",
    "/assets/6b7bb27e6ac64164ed48d101a8452a70.JPEG",
  ];

  // Split evenly into 4 marquee rows
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
      className="relative py-24 md:py-36 bg-background overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background pointer-events-none" />

      {/* Title + Subtitle */}
      <div className="relative z-10 container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-white">Moments</span>{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            in Motion
          </span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          A seamless flow of captured memories — authentic, vivid, and full of life.
        </p>
      </div>

      {/* Marquee Rows */}
      <div ref={marqueeContainerRef} className="relative z-10 flex flex-col gap-10">
        <Marquee images={rows[0]} direction="left" speed={45} />
        <Marquee images={rows[1]} direction="right" speed={50} />
        <Marquee images={rows[2]} direction="left" speed={55} />
        <Marquee images={rows[3]} direction="right" speed={60} />
      </div>
    </section>
  );
};

export default GalleryMarqueeSection;
