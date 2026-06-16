import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact</h2>

        <div className={styles.card}>
          <p className={styles.intro}>
            Feel free to reach out for collaboration, opportunities, or just to connect.
          </p>

          <div className={styles.grid}>
            <div className={styles.item}>
              <h3>Email</h3>
              <a href="mailto:nurrahmawati.id@gmail.com">nurrahmawati.id@gmail.com</a>
            </div>

            <div className={styles.item}>
              <h3>Location</h3>
              <p>Pringsewu, Lampung, Indonesia</p>
            </div>

            <div className={styles.item}>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/nurrahmawati-" target="_blank">
                linkedin.com/in/nurrahmawati
              </a>
            </div>

            <div className={styles.item}>
              <h3>GitHub</h3>
              <a href="https://github.com/nurrahmawt" target="_blank">
                github.com/nurrahmawt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}