"use client";

import { certifications, projects } from "@/data";
import styles from "./Certifications.module.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <p className="section-label">Verified credentials</p>
        <h2 className="section-title">Certifications</h2>

        <div className={styles.grid}>
          {certifications.map((certification) => {
            const related = certification.relevantProjectId
              ? projects.find((p) => p.id === certification.relevantProjectId)
              : undefined;

            return (
              <article key={certification.title} className={styles.card}>
                <p className={styles.title}>{certification.title}</p>
                <p className={styles.issuer}>{certification.issuer}</p>

                <div className={styles.actions}>
                  {certification.file || certification.url ? (
                    <a
                      href={certification.file ?? certification.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.more}
                    >
                      Certificate →
                    </a>
                  ) : null}

                  {related ? (
                    <a href={`#project-${related.id}`} className={styles.relatedBtn}>
                      Related project →
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}