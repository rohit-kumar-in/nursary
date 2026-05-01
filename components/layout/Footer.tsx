import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rose-100 bg-white/80">
      <div className="container-page py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-800">{siteConfig.name}</p>
            <p className="mt-2 max-w-md text-sm text-slate-600">{siteConfig.description}</p>
          </div>

          <ul className="flex flex-wrap gap-4">
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
        </div>

        <p className="mt-8 text-xs text-slate-500">
          {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
