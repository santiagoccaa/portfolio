"use client";

import { misStats } from "@/data/misStats";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {misStats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex justify-center xl:justify-start items-center gap-4"
              >
                <CountUp
                  end={stat.num1}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-accent"
                />
                <p className="text-white/80 leading-snug mt-4">
                  {stat.text1} <br /> <span>{stat.text2}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
