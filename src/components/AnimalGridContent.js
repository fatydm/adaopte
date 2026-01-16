'use client'

import { useState, useEffect } from "react";
import data from "../data/data_animals.json";
import AnimalCard from "@/components/AnimalCard";
import styles from "../styles/Animal_card.module.css";

export default function AnimalsGridContent() {
    const [type, setType] = useState("");
    const [ville, setVille] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [mounted, setMounted] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(8); // dynamique maintenant

    // Lire les paramètres URL + mounted
    useEffect(() => {
        setMounted(true);
        const params = new URLSearchParams(window.location.search);
        setType(params.get("type") || "");
        setVille(params.get("ville") || "");
    }, []);

    // 🔁 Reset page quand on change de filtre
    useEffect(() => {
        setCurrentPage(1);
    }, [type, ville]);

    // 🔄 Ajuster itemsPerPage selon la taille de l'écran
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(4);
            } else if (window.innerWidth <= 1024) {
                setItemsPerPage(6); 
            } else {
                setItemsPerPage(8); 
            }
        };

        handleResize(); // initialise au chargement
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const filteredData = data.filter((animal) => {
        const matchType =
            animal.type.toLowerCase() === type.toLowerCase() || type === "";

        const matchVille =
            animal.city.toLowerCase() === ville.toLowerCase() || ville === "";

        return matchType && matchVille;
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    if (!mounted) {
        return <p>Chargement des animaux...</p>;
    }

    return (
        <>
            {/* 🐾 Grille */}
            <div className={styles.containerGrid}>
                {paginatedData.map((animal, index) => (
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

            {/* 📄 Pagination */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        onClick={() => setCurrentPage((p) => p - 1)}
                        disabled={currentPage === 1}
                    >
                        ◀ Précédent
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={
                                currentPage === index + 1
                                    ? styles.activePage
                                    : ""
                            }
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((p) => p + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Suivant ▶
                    </button>
                </div>
            )}
        </>
    );
}
