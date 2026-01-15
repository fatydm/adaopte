import styles from "../styles/FormVolunteer.module.css"

export default function FormVolunteer() {
    return (
        <>
            <section className={styles.formContainer} >
                <div className={styles.divForm}>
                    <h2 className={styles.title}>Formulaire d'inscription</h2>
                    <p className={styles.paragraphe}>Remplissez ce formulaire pour rejoindre notre réseau de bénévoles. Nous vous
                        contacterons rapidement pour vous présenter les prochaines étapes.
                    </p>
                    <form className={styles.formStyle}>
                        <div>
                            <li>
                                <label forhtml="firstname">Prénom <span>*</span> </label>
                                <input type="text" id="firstname" name="user_firstname" required placeholder="Votre prénom" />
                            </li>
                            <li>
                                <label forhtml="surname">Nom <span>*</span></label>
                                <input type="text" id="surname" name="user_surname" required placeholder="Votre nom" />
                            </li>
                        </div>

                        <div>
                            <li>
                                <label forhtml="mail">Adresse email&nbsp; <span>*</span></label>
                                <input type="email" id="mail" name="user_mail" required placeholder="Votre email" />
                            </li>
                        </div>

                        <div>
                            <li>
                                <label forhtml="firstname">Ville <span>*</span> </label>
                                <input type="text" id="firstname" name="user_firstname" required placeholder="Votre ville" />
                            </li>
                            <li>
                                <label forhtml="firstname">Code postal <span>*</span> </label>
                                <input type="text" id="firstname" name="user_firstname" required placeholder="Code postal" />
                            </li>
                        </div>
                        <div>
                            <li>
                                <label forhtml="firstname">Disponibilités <span>*</span> </label>
                                <input

                                    type="date"
                                    id="start"
                                    name="trip-start"
                                    defaultValue="Choisis une date"
                                    min="2025-01-01"
                                    max="2099-12-31" required />
                            </li>
                        </div>

                        <div>
                            <li>
                                <label forhtml="msg">Votre motivation <span>*</span></label>
                                <textarea id="msg" name="user_message" placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte..."></textarea>
                            </li>
                        </div>
                        <div className={styles.divButton}>
                            <button className={styles.button}>Envoyer ma candidature</button>
                        </div>

                    </form>

                </div>

            </section>
        </>
    )
}