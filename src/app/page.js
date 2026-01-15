
import Head from "next/head"
import Banner from "@/components/Banner"
import Searchbar from "@/components/SearchBar"
import Animals from "@/components/Animals"
import FonctionnementSection from "@/components/FonctionnementSection";
import Question from "@/components/Questions"

import adoptionSteps from "@/data/adoptionSteps";

import { Amatic_SC } from 'next/font/google'
const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['400'],
})

import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
})


export default function Home() {
    return (
        <>
            <Head>
                <title>Adaopte</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Amatica+SC&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Banner
                image="/images/background.jpg"
                alt="Image d'un chien"
                title="DONNONS-LEUR AUTANT QU'ILS NOUS APPORTENT"
                description="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouver votre compagnon idéal parmi nos animaux disponibles à l'adoption."  
            >
                 <Searchbar />
            </Banner>
           
            <Animals />
            
            <FonctionnementSection
                title="COMMENT ÇA MARCHE"
                description="Adopter un animal est un engagement sérieux et à long terme. Voici notre processus d'adoption en quelques étapes simples."
                steps={adoptionSteps}
            />
            
            <Question />
        </>
    )
}