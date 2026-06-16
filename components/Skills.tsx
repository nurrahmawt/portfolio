import { skills } from "@/data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="section-label">Technical toolkit</p>
        <h2 className="section-title">Skills</h2>

        <div className={styles.grid}>
          {skills.map((skillGroup) => (
            <article key={skillGroup.label} className={styles.card}>
              <h3>{skillGroup.label}</h3>
              <div className={styles.tags}>
                {skillGroup.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}