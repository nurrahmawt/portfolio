import styles from "./Hero.module.css";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.card}>
          <img src="/image/profile2.jpeg" alt="profile" className={styles.avatar} />

          <p className={styles.badge}>AI & Data Enthusiast</p>

          <h1 className={styles.name}>Nur Rahmawati</h1>

          <p className={styles.role}>
            Machine Learning & AI Engineer • Data Scientist • Data Analyst
          </p>

          <p className={styles.summary}>
            Delivering data-driven and AI-powered projects from concept to deployment, with a focus on collaboration, structured workflows, and real-world impact.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryAction}>
              View Projects
            </a>
            <a 
              href="/file/CV.pdf" 
              className={styles.secondaryAction}
              download
              target="_blank"
            >
              <FiDownload className={styles.icon} />
              Download CV
            </a>
          </div>

          <div className={styles.tags}>
          </div>
        </div>
      </div>
    </section>
  );
}