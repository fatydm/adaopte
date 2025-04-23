import Link from "next/link"
import styles from "../styles/Footer.module.css"
import { Facebook, Instagram, Linkedin, Twitch } from "lucide-react"

export default function Navbar() {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.divArticle}>
                    <article className={styles.article}>
                        <h4 className={styles.title}>ADAOPTE</h4>
                        <p>Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal.</p>

                        <div className={styles.divIcon}>
                            <p className={styles.icon}><Facebook /></p>
                            <p className={styles.icon}><Instagram /></p>
                            <p className={styles.icon}><Linkedin /></p>
                            <p className={styles.icon}><Twitch /></p>
                        </div>

                    </article>

                    <article className={styles.article}>
                        <h4 className={styles.title}>INFORMATIONS UTILES</h4>
                        <ul className={styles.list}>
                            <li><Link className={styles.link} href="#">FAQs</Link></li>
                            <li><Link className={styles.link} href="/guide">Conseils d'adoption</Link></li>
                            <li><Link className={styles.link} href="#">Nous contacter</Link></li>
                            <li><Link className={styles.link} href="#">Mentions légales</Link></li>
                        </ul>
                    </article>

                    <article className={styles.article}>
                        <h4 className={styles.title}>CONTACT</h4>
                        <p>116 Rue du Faubourg Saint Martin</p>
                        <p>75010 Paris, France</p>
                        <p>Email: contact@adaopte.fr</p>
                        <p>Tél: +33 1 23 45 67 89</p>
                    </article>
                </div>

                <div className={styles.divP}>
                    <p> © 2025 Adaopte. Tous droits réservés.</p>
                    <p>Ce site est développé dans le cadre d'un projet ADA Tech School.</p>
                </div>
            </div>
        </>
    )
}