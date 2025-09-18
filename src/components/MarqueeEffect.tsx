import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MarqueeEffect = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (reverse) {
        gsap.set(".marquee-effect-right", { xPercent: -50 });
        tweenRef.current = gsap.to(".marquee-effect-right", {
          xPercent: 0,
          repeat: -1,
          ease: "linear",
          duration: 40,
        });
      } else {
        tweenRef.current = gsap.to(".marquee-effect-left", {
          xPercent: -50,
          repeat: -1,
          ease: "linear",
          duration: 40,
        });
      }
    }, marqueeRef);
    return () => ctx.revert();
  }, []);
  const onMouseEnter = () => {
    tweenRef.current?.timeScale(0.3);
  };
  const onMouseLeave = () => {
    tweenRef.current?.timeScale(1);
  };
  return (
    <div
      ref={marqueeRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="hidden  md:block md:w-full overflow-hidden mt-10 "
    >
      {children}
    </div>
  );
};

export default MarqueeEffect;
