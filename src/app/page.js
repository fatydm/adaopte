import Head from "next/head"
import Navbar from "../components/NavBar"
import Banner from "../../public/assets/background.jpg"
import styles from "../styles/Banner.module.css"


export default function Home() {
    return (
        <>
            <Head>
                <title>Adaopte</title>
            </Head>

            <Navbar />

            <div className={styles.home}>
                <div className={styles.banner}>
                    <img src={Banner} alt="Image d'un chien" />
                    <h1>DONNONS-LEUR AUTANT QU'ILS NOUS APPORTENT</h1>
                    <p>Chaque jour, des milliers d'animaux attendent une famille aimante.
                        Trouver votre compagnon idéal parmi nos animaux disponibles à l'adoption.</p>

                </div>
            </div>

        </>
    )
}