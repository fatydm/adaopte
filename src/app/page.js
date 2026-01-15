
import Head from "next/head"
import Banner from "@/components/Banner"
import AnimalsHomePage from "@/components/AnimalsHomePage"
import FonctionnementSection from "@/components/FonctionnementSection"

import adoptionSteps from "@/data/adoptionSteps"

import { Amatic_SC } from 'next/font/google'
const amatic = Amatic_SC({
    subsets: ['latin'],
    weight: ['400'],
})

import { Roboto } from 'next/font/google'
import Searchbar from "@/components/SearchBar"
import CallToAction from "@/components/CallToAction"

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const dynamic = "force-dynamic"

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
                    <Searchbar/>
                </Banner>
           
            <AnimalsHomePage />

            <FonctionnementSection
                title="COMMENT ÇA MARCHE"
                description="Adopter un animal est un engagement sérieux et à long terme. Voici notre processus d'adoption en quelques étapes simples."
                steps={adoptionSteps}
            />
            
            <CallToAction 
                title="Prêt⸱e à changer une vie ?"
                description="Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez votre foyer ou votre cœur, vous pouvez offrir une seconde chance à un animal abandonné."
                buttons={[
                    { label: "Adoptez un animal", href: "/adopt" },
                    { label: "Faire un don 🫶🏽", href: "", color: "red" },
                    { label: "Devenir bénévole", href: "/volunteer", color: "green" }
                ]}
            />
        </>
    )
}