"use client";
import { navLinks } from "@/data/navLinks";
import { SheetContent, Sheet, SheetTrigger } from "../ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

export default function MobilNav() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-36 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Santiago<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {navLinks.map((links, index) => {
            return (
              <Link key={index} href={links.path} className={`${links.path === pathName ?  'text-accent border-b-2 border-accent' : 'border-b-2 border-transparent'} text-xl capitalize hover:text-accent transition-all`}>
                {links.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
