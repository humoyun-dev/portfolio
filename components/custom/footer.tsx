import Link from "next/link";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 max-w-5xl py-10">
        <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16">
          <div className="space-y-1">
            <p className="text-base font-medium">{profile.shortName}</p>
            <p className="text-sm text-muted-foreground">
              {profile.location}
            </p>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-muted-foreground">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {year} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
