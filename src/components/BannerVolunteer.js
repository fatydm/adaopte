import styles from "../styles/Banner.module.css"

export default function Banner() {

    return (
        <>
            <div className={styles.home}>
                <img className={styles.banner} src="./images/alin-luna-8LfPXM6abRk-unsplash.jpg" alt="Image d'un chien" />
                <h1 className={styles.title}>DEVENIR BÉNÉVOLE</h1>
                <p className={styles.paragraphe}>
                    Offrez votre temps, changez des vies. Chez Adaopte, chaque bénécole contribue à redonner espoir aux animaux en attente d'un foyer.
                </p>
            </div>

            <div className={styles.search}>

            </div>

        </>
    )
}