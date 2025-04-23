import Head from "next/head"
import styles from "../styles/Banner.module.css"

import { Amatic_SC } from 'next/font/google'
const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['400'],
})

import { Roboto } from 'next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
})



export default function Home() {
    return (
        <>
            <Head>
                <title>Adaopte</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Amatica+SC&display=swap"
                    rel="stylesheet"
                />
            </Head>

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