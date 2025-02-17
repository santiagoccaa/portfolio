"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { contacto } from "@/data/contacto/contanto";

import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form className="flex  flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-[#FF4D4D]">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio optio neque dolorum iure deleniti perferendis
                accusantium, consectetur recusandae ea. Ad blanditiis placeat,
                numquam perferendis odio dolorum sunt vel deleniti aut?
              </p>
              {/* inputs */}
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firsname" placeholder="Firsname" />
                <Input type="text" name="surnames" placeholder="Surnames" />
                <Input type="email" name="email" placeholder="Email" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Text area */}
              <Textarea className="h-[200px] " placeholder="Type your message here." />
              {/* Button */}
              <Button size="md" className="max-w-40">Send</Button>
            </form>
          </div>

          {/* informacion */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contacto.map((info,index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#FF4D4D] rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{info.title}</p>
                    <h3 className="text-xl">{info.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
