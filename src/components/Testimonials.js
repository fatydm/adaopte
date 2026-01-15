
import styles from "../styles/Testimonials.module.css";

export default function Testimonials({ title, description, testimonials = [] }) {
  return (
    <section className={styles.testimonialsContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraphe}>{description}</p>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((item, index) => (
          <div key={index} className={styles.testimonyDiv}>
            <div className={styles.testimonyInfos}>
              <img 
                src={item.image} 
                alt={`Portrait de ${item.name}`} 
                className={styles.avatar}
              />
              <div className={styles.testimonyName}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>

            <p className={styles.testimonyParagraphe}>
              "{item.quote}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}