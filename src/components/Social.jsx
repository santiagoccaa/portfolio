import { socials } from "@/data/socials";
import Link from "next/link";

export default function Social({ containderStyles, iconStyles }) {
  return (
    <div className={containderStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
