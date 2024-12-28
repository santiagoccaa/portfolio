"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderButtons({ containerStyle, btnStyle }) {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      <button className="bg-accent border-2 border-transparent hover:bg-transparent hover:border-accent hover:text-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button
        className="bg-accent border-2 border-transparent hover:bg-transparent hover:border-accent hover:text-accent transition-all duration-500 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
