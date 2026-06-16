import { workExperiences } from "@/data";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Professional background</p>
        <h2 className="section-title">Experience</h2>

        <div className={styles.stack}>
          {workExperiences.map((experience) => (
            <article key={experience.role} className={styles.item}>
              <div className={styles.header}>
                <div>
                  <h3>{experience.role}</h3>
                  <p className={styles.meta}>
                    {experience.company} • {experience.location}
                  </p>
                </div>

                <span className={styles.pill}>{experience.type}</span>
              </div>

              <p className={styles.period}>{experience.period}</p>

              <ul className={styles.points}>
                {experience.sections.map((section, i) => (
                  <li key={i}>
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