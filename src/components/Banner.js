import styles from "../styles/Banner.module.css"

export default function Banner() {
    
    return(
        <>
        <div className={styles.home}>
                <img className={styles.banner} src="./assets/background.jpg" alt="Image d'un chien" />
                <h1 className={styles.title}>DONNONS-LEUR AUTANT QU'ILS NOUS APPORTENT</h1>
                <p className={styles.paragraphe}>
                    Chaque jour, des milliers d'animaux attendent une famille aimante.
                    Trouver votre compagnon idéal parmi nos animaux disponibles à l'adoption.
                </p>
            </div>

            <div className={styles.search}>

            </div>
    
        </>
    )
}