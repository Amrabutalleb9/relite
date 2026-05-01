import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-logo text-2xl tracking-tight">
              Relite<span className="text-accent-light">.</span>
            </Link>
            <p className="mt-4 text-body text-muted max-w-xs">
              Crafting premium software and marketing solutions from Dubai to the world.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-caption uppercase tracking-widest text-muted mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-caption uppercase tracking-widest text-muted mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@relite.ae"
                  className="text-body text-foreground hover:text-accent transition-colors duration-300"
                >
                  hello@relite.ae
                </a>
              </li>
              <li>
                <p className="text-body text-muted max-w-[14rem]">
                  Golf Vita, Damac Hills, Dubai, United Arab Emirates
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ruled-line mt-16 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-caption text-muted">
            &copy; {new Date().getFullYear()} Relite. All rights reserved.
          </p>
          <p className="text-caption text-muted">
            Golf Vita, Damac Hills, Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
