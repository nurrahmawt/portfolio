import styles from "./Hero.module.css";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.card}>
          <img src="/image/profile.jpg" alt="profile" className={styles.avatar} />

          <p className={styles.badge}>AI & Data Enthusiast</p>

          <h1 className={styles.name}>Nur Rahmawati</h1>

          <p className={styles.role}>
            Machine Learning & AI Engineer • Data Scientist • Data Analyst
          </p>

          <p className={styles.summary}>
            Building AI-driven solutions from data to deployment with a focus on real-world impact and intelligent systems.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryAction}>
              View Projects
            </a>
            <a 
              href="/file/CV_Nur Rahmawati.pdf" 
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