import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from "components/Header"
import Hero from "components/Hero"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
    </main>
  )
}
