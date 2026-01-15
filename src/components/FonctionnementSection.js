import styles from "../styles/Fonctionnement.module.css";

export default function FonctionnementSection({ title, description, steps = [] }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraphe}>{description}</p>

      <div className={styles.articleFlex}>
        {steps.map((step, index) => (
          <article key={index} className={styles.article}>
            <h2 className={styles.h2}>{step.icon}</h2>
            <h3 className={styles.articleSubtitles}>{step.title}</h3>
            <p className={styles.articlePara}>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

