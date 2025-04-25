import data from "../data/data_animals.json";
import AnimalCard from "@/components/AnimalCard";
import styles from "../styles/Animal_card.module.css";

export default function AnimalsGrid() {
    return (
        <div className={styles.animalGrid}>
            {data.map((animal, index) => (
                <AnimalCard
                    key={index}
                    index={index}
                    type={animal.type}
                    name={animal.name}
                    imageUrl={animal.imageUrl}
                    race={animal.breed}
                    age={animal.age}
                    localisation={animal.city}
                    description={animal.description}
                />
            ))}
        </div>
    );
}
