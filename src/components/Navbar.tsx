"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolid
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tight font-display transition-colors",
            showSolid
              ? "text-neutral-900 dark:text-neutral-50"
              : "text-white"
          )}
        >
          creeb
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm transition-colors",
                showSolid
                  ? pathname === link.href
                    ? "text-neutral-900 dark:text-neutral-50"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                  : pathname === link.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className={cn(
                    "absolute inset-0 rounded-md -z-10",
                    showSolid
                      ? "bg-neutral-100 dark:bg-neutral-800"
                      : "bg-white/10"
                  )}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className={cn(
              !showSolid &&
                "bg-white text-neutral-900 hover:bg-neutral-200 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            )}
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            className={cn(
              "p-2 -mr-2 transition-colors",
              showSolid
                ? "text-neutral-900 dark:text-neutral-50"
                : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950"
        >
          <div className="px-6 py-4 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full" size="sm">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
