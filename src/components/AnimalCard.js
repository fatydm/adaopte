import Link from "next/link";
import styles from "../styles/Animal_card.module.css";

export default function AnimalCard({ index, type, name, imageUrl, race, age, localisation, description }) {
    return (
        <Link href={`/animal/${index}`} className={styles.animalCard}>
            <img src={imageUrl} alt={`Image de ${type}`} className={styles.animalCard__img} />
            <p className={styles.animalCard__type}>{type}</p>
            <h3 className={styles.animalCard__title}>{name}</h3>
            <p className={styles.animalCard__race}><strong>Race :</strong> {race}</p>
            <p className={styles.animalCard__age}><strong>Âge :</strong> {age}</p>
            <p className={styles.animalCard__location}><strong>Localisation :</strong> {localisation}</p>
            <p className={styles.animalCard__description}>{description}</p>
        </Link>
    );
}
