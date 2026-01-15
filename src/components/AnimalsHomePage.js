import Link from "next/link"
import styles from "../styles/AnimalsHomePage.module.css"

export default function AnimalsHomePage() {

    return (
        <>
            <main className={styles.container}>
                <h2 className={styles.title}>NOS ANIMAUX À ADOPTER</h2>
                <p className={styles.paragraph}>Découvrez en images tous nos animaux qui attendent une famille aimante.
                    Chaque photo raconte une histoire et un espoir.</p>

                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.item1}`}>
                        <img className={styles.img} src="./images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item2}`}>
                        <img className={styles.img} src="./images/chan-swan-NKyl19P5IHg-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item3}`}>
                        <img className={styles.img} src="./images/jae-park-7GX5aICb5i4-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item4}`}>
                        <img className={styles.img} src="./images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item5}`}>
                        <img className={styles.img} src="./images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item6}`}>
                        <img className={styles.img} src="./images/alan-king-KZv7w34tluA-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item7}`}>
                        <img className={styles.img} src="./images/yosei-g-OVgE3m4MHKM-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item8}`}>
                        <img className={styles.img} src="./images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"></img>
                    </div>
                </div>

                <button className={styles.button}><Link href="/adopt">Voir tous les animaux</Link></button>
            </main>


        </>
    )
}