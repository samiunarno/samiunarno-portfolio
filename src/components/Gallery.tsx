import React, { useLayoutEffect, useRef } from "react";
import "./GalleryMarqueeSection.css"; // 👈 animation CSS import করুন

/* -------------------------------------------------------------------------- */
/*                                MARQUEE ROW                                 */
/* -------------------------------------------------------------------------- */
const Marquee = ({ images, direction = "left", speed = 40 }) => {
  const marqueeImages = [...images, ...images];
  const dir = direction === "left" ? "normal" : "reverse";

  return (
    <div className="relative flex overflow-hidden group select-none">
      <div
        className="flex items-center animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: dir,
        }}
      >
        {marqueeImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[45vw] sm:w-[35vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] mx-4"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full aspect-[16/9] object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.65,0.05,0.36,1)]"
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                           3D MARQUEE GALLERY SECTION                        */
/* -------------------------------------------------------------------------- */

// ✅ সব ইমেজ import — public নয়, src/assets ফোল্ডার থেকে
import img1 from "../../assets/smart-bin-pic-01_1600x907.jpg";
import img2 from "../../assets/att.jpg";
import img3 from "../../assets/sock.jpg";
import img4 from "../../assets/c1.jpg";
import img5 from "../../assets/ch1.jpg";
import img6 from "../../assets/Connect-ROS.png";
import img7 from "../../assets/Screenshot-2023-05-18-033647.png";
import img8 from "../../assets/Screenshot-2023-05-18-033710.png";
import img9 from "../../assets/Screenshot-2023-05-19-041052.png";
import img10 from "../../assets/IMG_2215.jpg";
import img11 from "../../assets/p1.jpg";
import img12 from "../../assets/meg1.jpg";
import img13 from "../../assets/p2.jpg";
import img14 from "../../assets/p3.jpg";
import img15 from "../../assets/IMG_0670.JPG";
import img16 from "../../assets/IMG_0661.JPG";
import img17 from "../../assets/IMG_0662.JPG";
import img18 from "../../assets/IMG_1101.jpg";
import img19 from "../../assets/con10.JPG";
import img20 from "../../assets/con11.JPG";
import img21 from "../../assets/con12.JPG";
import img22 from "../../assets/con13.JPG";
import img23 from "../../assets/con14.JPG";
import img24 from "../../assets/con2.JPG";
import img25 from "../../assets/con3.JPG";
import img26 from "../../assets/con4.JPG";
import img27 from "../../assets/con5.JPG";
import img28 from "../../assets/con6.JPG";
import img29 from "../../assets/con7.JPG";
import img30 from "../../assets/con8.JPG";
import img31 from "../../assets/con9.JPG";
import img32 from "../../assets/Con1.JPEG";
import img33 from "../../assets/Screenshot-2023-05-19-041117.png";
import img34 from "../../assets/Screenshot-2023-11-05-171409.png";
import img35 from "../../assets/v3.png";
import img36 from "../../assets/v6.png";
import img37 from "../../assets/v7.png";
import img38 from "../../assets/v8.png";
import img39 from "../../assets/w2.png";
import img40 from "../../assets/5E9C2DBF-214B-4370-8295-157C570A8ED5.JPG";
import img41 from "../../assets/6b7bb27e6ac64164ed48d101a8452a70.JPEG";

const GalleryMarqueeSection = () => {
  const sectionRef = useRef(null);
  const marqueeContainerRef = useRef(null);

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
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

  const allImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41,
  ];

  const rows = [
    allImages.slice(0, Math.ceil(allImages.length / 4)),
    allImages.slice(Math.ceil(allImages.length / 4), Math.ceil(allImages.length / 2)),
    allImages.slice(Math.ceil(allImages.length / 2), Math.ceil((3 * allImages.length) / 4)),
    allImages.slice(Math.ceil((3 * allImages.length) / 4)),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36 bg-[#0a0a0a] overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Moments{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            in Motion
          </span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          A seamless flow of captured memories — authentic, vivid, and full of life.
        </p>
      </div>

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
