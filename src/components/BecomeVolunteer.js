import styles from "../styles/BecomeVolunteerQuestion.module.css"


export default function Fonctionnement() {

    return (
        <>
            <section className={styles.container}>
                <h2 className={styles.title}>POURQUOI DEVENIR BÉNÉVOLE ?</h2>
                <p className={styles.paragraphe}>Être bénévole chez Adaopte, c'est bien plus qu'un coup de main: c'est un engagement du coeur, qui change des vies - humaines et animales.</p>

                <div className={styles.articleFlex}>
                    <article className={styles.article}>
                        <h2 className={styles.h2}>🌱</h2>
                        <h3 className={styles.articleSubtitles}>Agir concrètement pour le bien être animal</h3>
                        <p className={styles.articlePara}>Chaque geste compte: un regard, une caresse, une balade... Vous contribuez à redonner confiance aux animaux abandonnés et à leur offir une seconde chance. </p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>🧠</h2>
                        <h3 className={styles.articleSubtitles}>Développer des compétences précieuses</h3>
                        <p className={styles.articlePara}>Apprenez à mieux cpmprendre les comportements animaux, renforcez votre patience, votre sens de l'observation et votre capacité à prendre soin</p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>👥</h2>
                        <h3 className={styles.articleSubtitles}>Rejoindre une communauté engagée</h3>
                        <p className={styles.articlePara}>Intégrez un réseau solidaire de passionné.e.s, participez à des actions collectives et partagez des moments forts autour d'une cause essentielle.</p>
                    </article>

                    <article className={styles.article}>
                        <h2 className={styles.h2}>🌟</h2>
                        <h3 className={styles.articleSubtitles}>Donner du sens à votre temps libre</h3>
                        <p className={styles.articlePara}>En vous impliquant chez Adaopte, vous transformez votre temps libre en véritable acte d'amour, de respect et de solidarité envers les animaux</p>
                    </article>
                </div>
            </section>
        </>
    )
}