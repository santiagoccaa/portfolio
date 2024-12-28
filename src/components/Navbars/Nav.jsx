"use client";

import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        return (
          <Link key={index} href={link.path} className={`${link.path === pathName && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
