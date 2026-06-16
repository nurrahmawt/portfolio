import styles from "./Navbar.module.css";
import { SOCIAL } from "@/data";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
  NR
</a>

        <div className={styles.links}>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.social}>
          <a href={SOCIAL.github} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}