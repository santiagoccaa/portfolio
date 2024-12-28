import Link from "next/link";
import { Button } from "./ui/button";
import MobilNav from "./Navbars/MobilNav";
import Nav from "./Navbars/Nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Santiago<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Nav para pantallas grandes */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href={"/contact"} className="hover:scale-95 transition-all duration-300">
            <Button className="">Hire me</Button>
          </Link>
        </div>

        {/* Nav Para telefonos */}
        <div className="xl:hidden">
          <MobilNav />
        </div>
      </div>
    </header>
  );
}
