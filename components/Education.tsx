import { education } from "@/data";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Academic path</p>
        <h2 className="section-title">Education</h2>

        <div className={styles.stack}>
          {education.map((entry) => (
            <article key={entry.role} className={styles.card}>
              <div className={styles.header}>
                <div>
                  <h3>{entry.role}</h3>
                  <p className={styles.meta}>
                    {entry.company} • {entry.location}
                  </p>
                </div>

                <span className={styles.pill}>{entry.period}</span>
              </div>

              <p className={styles.type}>{entry.type}</p>

              <ul className={styles.points}>
                {entry.sections.map((section) => (
                  <li key={section.title}>
                    <strong>{section.title}</strong>
                    <ul>
                      {section.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}