import Head from "next/head"
import Banner from "@/components/Banner"
import Searchbar from "@/components/SearchBar"
import Animals from "@/components/Animals"
import Fonctionnement from "@/components/Fonctionnement"

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

            <Banner />
            <Searchbar />
            <Animals />
            <Fonctionnement />
        </>
    )
}