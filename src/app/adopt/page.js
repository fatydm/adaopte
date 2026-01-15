import Head from "next/head"
import Searchbar from "@/components/SearchBar"
import AnimalsGridContent from "@/components/AnimalGridContent"

export const dynamic = "force-dynamic"

export default function Adopt() {
  return (
    <>
      <Head>
        <title>Adoptez un compagnon de vie</title>
      </Head>

      <section className="sectionSearchBar">
        <Searchbar/>
      </section>

      <section className="sectionAnimalGrid">
        <AnimalsGridContent/>
      </section>
    </>
  )
}