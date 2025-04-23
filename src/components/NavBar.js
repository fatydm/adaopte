import Link from "next/link"
import { PawPrint, House, Bone, Fish, Squirrel } from "lucide-react"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {

    return (
        <>
            <div className={styles.navbar}>
                <h2><PawPrint /> Ada<span className={styles.span}>opte</span></h2>

                <ul className={styles.list}>
                    <li><Link className={styles.link} href="/"><House /> Accueil</Link></li>
                    <li><Link className={styles.link} href="/adopt"><Bone /> J'adopte</Link></li>
                    <li><Link className={styles.link} href="/"><Fish /> Guide de l'adoption</Link></li>
                    <li><Link className={styles.link} href="/volunteer"><Squirrel />Devenir bénévole</Link></li>
                </ul>

                <p className={styles.donation}>Faire un don 🫶🏽 </p>

            </div>
        </>
    )
}