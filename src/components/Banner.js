
import styles from "../styles/Banner.module.css";

export default function Banner({
    image,
    alt,
    title,
    description,
    children
}) {
    return (
        <>
            <div className={styles.home}>
                <img
                    className={styles.banner}
                    src={image}
                    alt={alt}
                />

                <h1 className={styles.title}>{title}</h1>

                <p className={styles.paragraphe}>
                    {description}
                </p>
            </div>

            {/* Zone optionnelle (ex: Searchbar) */}
            {children && (
                <div className={styles.search}>
                    {children}
                </div>
            )}
        </>
    );
}
