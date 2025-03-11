'use client'
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";


const linkData = [
  { name: "Performance", href: "/performance" },
  { name: "Reliability", href: "/reliability" },
  { name: "Scale", href: "/scale" },
];

//const accessLink = ['/', '/performance', '/reliability', '/scale']

export default function Header() {
  const pathname = usePathname()
  //if(!accessLink.includes(pathname)) return null;
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link
                key={link.name}
                className={pathname === link.href ? "text-purple-500" : ""}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
