import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              creeb
            </Link>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
              Modern apartments, nationwide.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex gap-6">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="mailto:hello@creeb.com"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                hello@creeb.com
              </a>
              <a
                href="tel:+1-555-123-4567"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {new Date().getFullYear()} Creeb. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
