"use client";

import { motion } from "framer-motion";
import { servicios } from "@/data/servicios/servicios";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" 
        >
          {servicios.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group shadow-lg shadow-transparent hover:shadow-[#FF4D4D] p-4 border-b-2 border-white/20 hover:border-[#FF4D4D] w-full group-hover:bg-[#FF4D4D] border-l-2 border-l-transparent hover:border-l-[#FF4D4D] transition-all duration-500 cursor-pointer"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-[#FF4D4D] text-transparent group-hover:text-[#FF4D4D] transition-all duration-500">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#FF4D4D] transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 -z-20"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-[#FF4D4D] transition-all duration-500">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
