import TestimonialCard from "../cards/TestimonialCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import MarqueeEffect from "../MarqueeEffect";
import { testimonials } from "@/lib/utils";
import MobileSwiper from "../MobileSwiper";
import { SwiperSlide } from "swiper/react";

const Testimonials = () => {
  useGSAP(() => {
    const title = new SplitText(".testimonials-text", { type: "chars, words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 80%",
      },
    });
    tl.from(".testimonials-text-div", {
      y: 50,
      duration: 1,
      ease: "power2.inOut",
      opacity: 0,
    });
    tl.from(
      title.chars,
      {
        stagger: 0.02,
        y: 10,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 0,
      },
      "<"
    );
  }, []);
  return (
    <section id="testimonials" className="w-full h-full mt-10 lg:mt-20">
      <div className="flex flex-col gap-10 px-2 items-center">
        <div className="flex flex-col gap-4 justify-center items-center testimonials-text-div">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>Testimonials</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold testimonials-text">
            What Our Clients Say
          </h2>
          <p className="text-center">
            Here’s what our partners and clients say about working with us in
            construction, real estate, and trade.
          </p>
        </div>
      </div>
      {/* large screen */}
      <div className="hidden md:flex flex-col items-center  overflow-x-hidden mt-20 mask-x-from-70%">
        <MarqueeEffect>
          <div className="flex marquee-effect-left  w-max">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                comment={testimonial.comment}
                author={testimonial.author}
                className="bg-[#f4f3f3] mr-6"
              />
            ))}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                comment={testimonial.comment}
                author={testimonial.author}
                className="bg-[#f4f3f3] mr-6"
              />
            ))}
          </div>
        </MarqueeEffect>
        <MarqueeEffect reverse={true}>
          <div className="flex marquee-effect-right w-max">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                comment={testimonial.comment}
                author={testimonial.author}
                className="bg-[#f4f3f3] mr-6"
              />
            ))}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                comment={testimonial.comment}
                author={testimonial.author}
                className="bg-[#f4f3f3] mr-6"
              />
            ))}
          </div>
        </MarqueeEffect>
      </div>
      {/* mobile carousel */}
      <MobileSwiper>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              comment={testimonial.comment}
              author={testimonial.author}
              className="bg-[#f4f3f3]"
            />
          </SwiperSlide>
        ))}
      </MobileSwiper>
    </section>
  );
};

export default Testimonials;
