"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  // Use Next.js built-in hook for getting the current path
  const pathname = usePathname();

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-gray-800 py-4 px-8 fixed w-full top-0 z-10">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
          >
            AA
          </Link>
          <div className="flex space-x-6">
            {navLinks.map((link) => {
              if (link.path === "/blog") {
                return (
                  <a
                    href="/blog"
                    key={link.path}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                );
              }

              const isActive =
                (link.path === "/" && pathname === "/") ||
                (link.path !== "/" && pathname.startsWith(link.path));

              return (
                <Link
                  href={link.path}
                  key={link.path}
                  className={`transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <div className="h-1 w-1 bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
