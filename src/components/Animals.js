import styles from "../styles/Animals.module.css"

export default function Animals() {

    return (
        <>
            <main className={styles.container}>
                <h1 className={styles.title}>NOS ANIMAUX À ADOPTER</h1>
                <p className={styles.paragraph}>Découvrez en images tous nos animaux qui attendent une famille aimante.
                    Chaque photo raconte une histoire et un espoir.</p>

                <div className={styles.grid}>
                    <div className={`${styles.item} ${styles.item1}`}>
                        <img className={styles.img} src="./assets/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item2}`}>
                        <img className={styles.img} src="./assets/chan-swan-NKyl19P5IHg-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item3}`}>
                        <img className={styles.img} src="./assets/jae-park-7GX5aICb5i4-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item4}`}>
                        <img className={styles.img} src="./assets/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item5}`}>
                        <img className={styles.img} src="./assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item6}`}>
                        <img className={styles.img} src="./assets/alan-king-KZv7w34tluA-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item7}`}>
                        <img className={styles.img} src="./assets/yosei-g-OVgE3m4MHKM-unsplash.jpg"></img>
                    </div>
                    <div className={`${styles.item} ${styles.item8}`}>
                        <img className={styles.img} src="./assets/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"></img>
                    </div>
                </div>
                
                <button className={styles.button}>Voir tous les animaux</button>
            </main>


        </>
    )
}