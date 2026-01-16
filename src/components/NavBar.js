'use client'

import Link from "next/link"
import { useState } from "react";
import { PawPrint, House, Bone, Fish, Squirrel } from "lucide-react"
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false); // ferme le menu burger
    };

    return (
        <nav className={styles.navbar}>
            <h2 className={styles.h2}><PawPrint /> Ada<span className={styles.span}>opte</span></h2>

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`${styles.list} ${open ? styles.open : ""}`}>
                <li><Link className={styles.link} href="/" onClick={handleLinkClick}><House /> Accueil</Link></li>
                <li><Link className={styles.link} href="/adopt" onClick={handleLinkClick}><Bone /> J'adopte</Link></li>
                <li><Link className={styles.link} href="https://www.defensedelanimal.fr/wp-content/uploads/2022/03/Guide-de-la-belle-adoption-WEB.pdf" target="_blank" onClick={handleLinkClick}><Fish /> Guide de l'adoption</Link></li>
                <li><Link className={styles.link} href="/volunteer" onClick={handleLinkClick}><Squirrel />Devenir bénévole</Link></li>
                <li><p className={styles.donation} onClick={handleLinkClick}>Faire un don 🫶🏽</p></li>
            </ul>
        </nav>
    )
}
