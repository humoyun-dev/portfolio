import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import {
  ArrowLeftIcon,
  GithubIcon,
  ExternalLinkIcon,
  ArrowUpRightIcon,
} from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | Humoyun.DEV`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-32 pb-24 md:pt-40">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to projects
        </Link>

        <header className="space-y-6 pb-12 border-b">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Project
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-base">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              View source
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Live demo
                <ArrowUpRightIcon className="h-3 w-3" />
              </a>
            )}
          </div>
        </header>

        <div className="py-12 space-y-12">
          <section className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Overview
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {project.longDescription}
            </p>
          </section>

          <section className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-lg text-foreground/80 flex gap-4"
                >
                  <span className="text-muted-foreground select-none">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-12">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Stack
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-foreground/80">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </section>
        </div>

        {otherProjects.length > 0 && (
          <section className="mt-12 pt-12 border-t">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              More projects
            </h2>
            <div className="divide-y border-y">
              {otherProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center justify-between py-5 transition-colors hover:text-foreground/60"
                >
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowUpRightIcon className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
