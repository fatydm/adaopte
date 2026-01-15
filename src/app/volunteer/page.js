import Head from "next/head"
import Banner from "@/components/Banner"
import FonctionnementSection from "@/components/FonctionnementSection"
import Testimonials from "@/components/Testimonials"
import FormVolunteer from "@/components/FormVolunteer"

import volunteerSteps from "@/data/volunteerSteps";

import { Amatic_SC } from 'next/font/google'
const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400'],
})

import { Roboto } from 'next/font/google'
import CallToAction from "@/components/CallToAction"
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function Volunteer() {

  const volunteerTestimonials = [
    {
      name: "Claire M.",
      role: "Bénévole depuis 1 an",
      image: "./images/omid-armin-yisZonvqh54-unsplash.jpg",
      quote: "J'ai commencé à m'occuper de Louna, une chienne timide... Être bénévole chez Adaopte, c'est offrir de l'amour... et en recevoir énormément."
    },
    {
      name: "Juan R.",
      role: "Bénévole depuis 8 mois",
      image: "../images/christian-buehner-DItYlc26zVI-unsplash.jpg",
      quote: "Je voulais m'investir concrètement pour une cause qui me tient à coeur. Marcher avec les chiens, jouer avec les chats... C'est profondément gratifiant."
    }
  ];

  return (
    <>
      <Head>
        <title>Devenez bénévole</title>
      </Head>

      <Banner
        image="./images/alin-luna-8LfPXM6abRk-unsplash.jpg"
        alt="Image d'un chien"
        title="DEVENIR BÉNÉVOLE"
        description=" Offrez votre temps, changez des vies. Chez Adaopte, chaque bénécole contribue à redonner espoir aux animaux en attente d'un foyer."
       />
          
      <FormVolunteer class="formVolunteer" />

      <FonctionnementSection
          title="POURQUOI DEVENIR BÉNÉVOLE ?"
          description="Être bénévole chez Adaopte, c'est bien plus qu'un coup de main : c'est un engagement du cœur."
          steps={volunteerSteps}
      />
      
      <CallToAction 
            title="Des questions ?"
            description={
                <>
                    Nous sommes là pour répondre à toutes vos interrogations concernant
                    le bénévolat chez Adaopte. <br/>
                    N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.
                </>
            }
            buttons={[
                { label: "Foire aux questions", href: "/faq" },
                { label: "Contactez-nous", href: "/contact", color: "red" }
            ]}
        />

      <Testimonials 
        title="Témoignages de bénévoles"
        description="Découvrez ce que nos bénévoles partagent de leur expérience avec Adaopte."
        testimonials={volunteerTestimonials}
      />
    </>
  )
}