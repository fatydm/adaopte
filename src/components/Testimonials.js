import styles from "../styles/Testimonials.module.css"

export default function Testimonials() {

    return (
        <>
            <section className={styles.testimonialsContainer} >
                <h2 className={styles.title}>Témoignages de bénévoles</h2>
                <p className={styles.paragraphe}> Découvrez ce que nos bénévoles partagent de leur expérience avec Adaopte.</p>

                <div className={styles.testimonyDiv}>
                    <div className={styles.testimonyInfos}>
                        <img src="./images/omid-armin-yisZonvqh54-unsplash.jpg" />

                        <div className={styles.testimonyName}>
                            <h3>Claire M.</h3>
                            <p>Bénévole depuis 1 an</p>
                        </div>
                    </div>

                    <p className={styles.testimonyParagraphe}>"J'ai commencé à m'occuper de Louna, une chienne timide arrivée au refuge.
                        Petit à petit, elle m'a fait confiance. Aujourd'hui, elle  a été adoptée mais je garde
                        un souvenir inoubliable de notre complicité. Être bénévole chez Adaopte, c'est offrir de l'amour...
                        et en recevoir énormément.""
                    </p>
                </div>

                <div className={styles.testimonyDiv}>
                    <div className={styles.testimonyInfos}>
                        <img src="../images/christian-buehner-DItYlc26zVI-unsplash.jpg" />

                        <div className={styles.testimonyName}>
                            <h3>Juan R.</h3>
                            <p>Bénévole depuis 8 mois</p>
                        </div>
                    </div>

                    <p className={styles.testimonyParagraphe}>"Je voulais m'investir concrètement pour une cause qui me tient à coeur. Avec Adaopte,
                        j'ai découvert le refuge, les histoires de chaque animal, et une équipe soudée. Marcher avec les chiens, jouer avec les chats, 
                        les voir progresser... C'est profondément gratifiant."
                    </p>
                </div>
            </section >
        </>
    )
}