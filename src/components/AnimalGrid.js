'use client'

import data from "../data/data_animals.json";
import AnimalCard from "@/components/AnimalCard";
import { useSearchParams } from 'next/navigation';
import styles from "../styles/Animal_card.module.css";

export default function AnimalsGrid() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "";
    const ville = searchParams.get("ville") || "";
    console.log(type)

    const filteredData = data.filter((animal) => {
        const matchType = animal.type.toLowerCase() === type || type === '';
        const matchVille = animal.city.toLowerCase() === ville || ville === '';
        return matchType && matchVille
    })

    return (
        <div className={styles.containerGrid}>
            {filteredData.map((animal, index) => (
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
