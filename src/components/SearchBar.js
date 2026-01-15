
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import styles from "../styles/Searchbar.module.css"
import data from "../data/data_animals.json";

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // États
    const [animal, setAnimal] = useState('');
    const [ville, setVille] = useState('');
    const [animalCount, setAnimalCount] = useState(0);
    const [hasSearched, setHasSearched] = useState(false);

    // Récupération du type depuis l'URL (utile si on arrive via lien)
    const typeFromUrl = searchParams.get("type") || "";

    // Filtrage des données
    const filteredData = data.filter((animalItem) => {
        const matchType =
            animalItem.type.toLowerCase() === (animal || typeFromUrl).toLowerCase() ||
            (animal === "" && typeFromUrl === "");

        const matchVille =
            animalItem.city.toLowerCase() === ville.toLowerCase() || ville === "";

        return matchType && matchVille;
    });

    // Soumission de la recherche
    const submit = () => {
        const query = new URLSearchParams();

        if (animal) query.append('type', animal);
        if (ville) query.append('ville', ville);

        router.push(`/adopt?${query.toString()}`);

        setAnimalCount(filteredData.length);
        setHasSearched(true);
    };

    // Reset filtres
    const resetFilters = () => {
        setAnimal('');
        setVille('');
        setAnimalCount(0);
        setHasSearched(false);
        router.push('/adopt');
    };

    return (
        <div className={styles.search}>
            <div className={styles.container}>

                {/* Type d'animal */}
                <div className={styles.petType}>
                    <label htmlFor="pet-select">Type d'animal</label>
                    <select
                        id="pet-select"
                        className={styles.petSelect}
                        onChange={(e) => setAnimal(e.target.value)}
                        value={animal}
                    >
                        <option value="">-- Choisis un animal --</option>
                        <option value="chien">Chien</option>
                        <option value="chat">Chat</option>
                        <option value="lapin">Lapin</option>
                        <option value="hamster">Hamster</option>
                        <option value="cochon-d'inde">Cochon d'Inde</option>
                    </select>
                </div>

                {/* Ville */}
                <div className={styles.localization}>
                    <label htmlFor="search">Localisation</label>
                    <input
                        className={styles.caseville}
                        type="search"
                        placeholder="Votre ville"
                        value={ville}
                        onChange={(e) => setVille(e.target.value)}
                    />
                </div>

                {/* Bouton */}
                <button
                    onClick={submit}
                    className={styles.button}
                >
                    Rechercher 🔎
                </button>
            </div>

            {/* Résultats + reset */}
            <div className={styles.reset}>

                {/* Texte dynamique */}
                {hasSearched && (
                    <p className={styles.foundText}>
                        {animalCount === 0 && "Aucun animal trouvé 😿"}
                        {animalCount === 1 && "1 animal trouvé 🐾"}
                        {animalCount > 1 && `${animalCount} animaux trouvés 🐾`}
                    </p>
                )}

                <p
                    onClick={resetFilters}
                    className={styles.resetFunction}
                >
                    Réinitialiser les filtres
                </p>
            </div>
        </div>
    );
}
