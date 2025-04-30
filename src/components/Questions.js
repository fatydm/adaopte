import Link from "next/link"
import styles from "../styles/Questions.module.css"

export default function Question() {

    return (
        <>
            <div className={styles.questionContainer}>
                <h2 className={styles.title}>Prêt⸱e à changer une vie ?</h2>
                <p className={styles.paragraphe}>Adoptez, partagez, soutenez... Chaque geste compte.
                    Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné.</p>

                <div className={styles.buttonStyle}>
                    <button className={styles.button}><Link href="/adopt">Adoptez un animal</Link></button>
                    <button className={`${styles.button} ${styles.red}`}><Link href="">Faire un don 🫶🏽</Link></button>
                    <button className={`${styles.button} ${styles.green}`}><Link href="/volunteer">Devenir bénévole</Link></button>
                </div>
            </div>
        </>
    )
}