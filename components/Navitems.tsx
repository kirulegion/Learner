"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
  { label: `Home`, href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const Navitems = () => {
  const pathanme = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navitems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathanme === href && "font-bold text-blue-300")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navitems;
