import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Campuses", href: "/campuses" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight font-display">
              creeb
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Student housing, simplified.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex gap-6">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="mailto:hello@creeb.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@creeb.com
              </a>
              <a
                href="tel:+1-555-123-4567"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Creeb. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
