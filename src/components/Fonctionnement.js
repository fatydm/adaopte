import styles from "../styles/Fonctionnement.module.css"

export default function Fonctionnement() {

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>COMMENT ÇA MARCHE</h2>
                <p className={styles.paragraphe}>Adopter un animal est un engagement sérieux et à long terme.
                    Voici notre processus d'adoption en quelques étapes simples.</p>

                <div className={styles.articleFlex}>
                    <article className={styles.article}>
                        <h2 className={styles.h2}>🔎</h2>
                        <h3 className={styles.articleSubtitles}>1. Trouvez votre compagnon</h3>
                        <p className={styles.articlePara}>Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie.</p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>📝</h2>
                        <h3 className={styles.articleSubtitles}>2. Remplissez une demande</h3>
                        <p className={styles.articlePara}>Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demande avec soin.</p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>👋🏾</h2>
                        <h3 className={styles.articleSubtitles}>3. Rencontrez l'animal</h3>
                        <p className={styles.articlePara}>Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est une étape essentielle du processus.</p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>🏠</h2>
                        <h3 className={styles.articleSubtitles}>4. Bienvenue à la maison</h3>
                        <p className={styles.articlePara}>Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller.</p>
                    </article>
                </div>

                <div className={styles.change}>
                    <h2 className={styles.title}>Prêt⸱e à changer une vie ?</h2>
                    <p className={styles.paragraphe}>Adoptez, partagez, soutenez... Chaque geste compte. 
                        Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné.</p>
                </div>

                <div className={styles.buttonStyle}>
                    <div className={styles.button}> Adoptez un animal</div>
                    <div className={`${styles.button} ${styles.red}`}>Faire un don 🫶🏽</div>
                    <div className={`${styles.button} ${styles.green}`}> Devenir bénévole</div>

                </div>
            </section>
        </>
    )
}