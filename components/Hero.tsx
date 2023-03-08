'use client'
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import Image from "next/image"
import picture from "../public/picture.png"
import Link from "next/link"

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Tony!",
      "Food-Enjoyer.tsx",
      "<SoftwareDeveloper />",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-central overflow-hidden">
      <BackgroundCircles />
      {/* UPDATE WITH NEXTJS IMAGE */}
      <Image src={picture} alt="Picture of Tony" className="relative rounded-full h-32 w-32 mx-auto items-center justify-center"/>
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-30">
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:6xl font-semibold px-10 z-30">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#FF0000" />
      </h1>
      <div className="pt-5 z-30">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  )
}