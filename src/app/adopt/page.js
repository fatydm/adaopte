import Head from "next/head"
import Searchbar from "@/components/SearchBar"
import AnimalGrid from "@/components/AnimalGrid"

export default function Adopt() {
  return (
    <>
      <Head>
        <title>Adoptez un compagnon de vie</title>
      </Head>

      <section className="sectionSearchBar">
        <Searchbar />
      </section>

      <section className="sectionAnimalGrid">
        <AnimalGrid />
      </section>

    </>
  )
}