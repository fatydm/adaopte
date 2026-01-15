import Link from "next/link"
import styles from "../styles/CallToAction.module.css"

export default function CallToAction({ title, description, buttons }) {
    return (
        <section className={styles.questionContainer}>
            <div className={styles.change}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.paragraphe}>{description}</p>
            </div>

            <div className={styles.buttonStyle}>
                {buttons.map((button, index) => (
                    <button 
                        key={index} 
                        className={`${styles.button} ${button.color ? styles[button.color] : ''}`}
                    >
                        {button.href ? (
                            <Link href={button.href}>{button.label}</Link>
                        ) : (
                            button.label
                        )}
                    </button>
                ))}
            </div>
        </section>
    )
}