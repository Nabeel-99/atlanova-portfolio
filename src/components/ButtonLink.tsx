import gsap from "gsap";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

type ButtonLinkProps = {
  bgColor: string;
  text: string;
  arrowBg: string;
  textColor: string;
  arrowColor: string;
  fillColor: string;
  fillTextColor: string;
  link?: string;
};
const ButtonLink = ({
  bgColor,
  text,
  arrowBg,
  arrowColor,
  textColor,
  fillColor,
  fillTextColor,
  link,
}: ButtonLinkProps) => {
  const fillRef = useRef(null);
  const textRef = useRef(null);
  const onMouseEnter = () => {
    gsap.to(fillRef.current, {
      scale: 10,
      duration: 0.5,
      ease: "power2.inOut",
      backgroundColor: fillColor,
      zIndex: 10,
    });
    gsap.to(textRef.current, {
      color: fillTextColor,
      duration: 0.3,
    });
    gsap.to(".arrow", {
      rotate: 0,
      duration: 0.3,
    });
  };

  const onMouseLeave = () => {
    gsap.to(fillRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power2.inOut",
      zIndex: -1,
    });
    gsap.to(textRef.current, {
      color: textColor,
      duration: 0.3,
    });
    gsap.to(".arrow", {
      rotate: -45,
      duration: 0.3,
    });
  };
  return (
    <div className="flex items-start mt-10 justify-start">
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`relative btn-work  overflow-hidden rounded-4xl ${bgColor}`}
      >
        <a
          href={link}
          className="relative backdrop-blur-lg cursor-pointer back px-4 rounded-4xl p-2 flex items-center gap-3 z-20"
        >
          <span ref={textRef} className={`text-${textColor}`}>
            {text}
          </span>
          <span className={`${arrowBg} rounded-full p-2`}>
            <FaArrowRight
              className={`-rotate-45 arrow text-${arrowColor} text-sm`}
            />
          </span>
        </a>
        <div
          ref={fillRef}
          className="absolute top-2 right-4 rounded-full h-8 w-8 -z-10"
        ></div>
      </div>
    </div>
  );
};

export default ButtonLink;
