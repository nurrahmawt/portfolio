"use client";

import { useState, useEffect } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { projects } from "@/data";
import type { ProjectCategory } from "@/types";
import styles from "./Projects.module.css";

const filters: ProjectCategory[] = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Data Analysis",
  "Web",
  "Mobile Development & Security",
];

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      setSupportsHover(hasHover);
    }
  }, []);

  let filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-copy">
        </p>

        <div className={styles.filters} aria-label="Project filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={active === f ? styles.active : styles.filter}
              aria-pressed={active === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={filtered.indexOf(p)}
              supportsHover={supportsHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  supportsHover,
}: {
  project: (typeof projects)[number];
  index: number;
  supportsHover: boolean;
}) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!supportsHover) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--card-x", `${x}px`);
    event.currentTarget.style.setProperty("--card-y", `${y}px`);
    event.currentTarget.style.setProperty(
      "--card-tilt-x",
      `${((bounds.height / 2 - y) / bounds.height) * 8}deg`,
    );
    event.currentTarget.style.setProperty(
      "--card-tilt-y",
      `${((x - bounds.width / 2) / bounds.width) * 8}deg`,
    );
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (!supportsHover) return;

    event.currentTarget.style.setProperty("--card-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--card-tilt-y", "0deg");
  };

  const style = {
    ["--card-delay" as string]: `${index * 90}ms`,
  } as CSSProperties;

  return (
    <article
      id={`project-${project.id}`}
      className={`${styles.card} slide-up-fade`}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.header}>
        <span className={styles.badge}>
          {project.category.includes("Data Analysis") ? "Dashboard" : project.category[0]}
        </span>
        <span className={styles.year}>{project.year}</span>
      </div>

      <h3>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.category}>
        {project.category.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      <div className={styles.tech}>
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <ul className={styles.highlights}>
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Dashboard
          </a>
        )}
        {project.streamlit && (
          <a href={project.streamlit} target="_blank" rel="noreferrer">
            Streamlit
          </a>
        )}
        {project.web && (
          <a href={project.web} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
      </div>
    </article>
  );
}