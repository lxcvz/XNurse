"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-gray-200">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-0">
        <Link href="/" className="flex items-center space-x-2">
          <h3 className="text-2xl font-staatliches font-bold">XNurse</h3>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {[
            { href: "/", label: "Início" },
            { href: "/turnos", label: "Turnos disponíveis" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "transition-colors hover:text-gray-900",
                pathname === href
                  ? "text-gray-900 border-b-2 border-gray-600"
                  : "text-gray-600"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
