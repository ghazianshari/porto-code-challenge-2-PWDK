"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="relative -top-24 mx-auto max-w-3xl scale-90 px-4 py-8">
      <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
      <p className="text-secondary mb-8 text-lg">{project.description}</p>

      <div className="mb-8 aspect-video">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-12 flex gap-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary flex items-center gap-2 transition-colors"
        >
          <FaGithub className="h-5 w-5" />
          <span>Code</span>
        </a>
      </div>

      {/* --- STAR Method Sections --- */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">💡 Situation</h2>
          <p className="text-secondary text-base">
            {/* Describe the project's background and purpose here. */}
            {project.starmethod.s}
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">🎯 Task</h2>
          <p className="text-secondary text-base">
            {/* Outline the primary goals or responsibilities. */}
            {project.starmethod.t}
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">⚙️ Action</h2>
          <p className="text-secondary text-base">
            {/* Explain the steps you took, tools used, and any challenges. */}
            {project.starmethod.a}
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-semibold">🏁 Result</h2>
          <p className="text-secondary text-base">
            {/* Share the outcomes, including metrics, satisfaction, or learnings. */}
            {project.starmethod.r}
          </p>
        </div>
      </section>
    </div>
  );
}
