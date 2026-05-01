import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[color:var(--background)]/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-slate-800">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" className="button-primary text-sm">
          Schedule Visit
        </Link>
      </nav>
    </header>
  );
}
