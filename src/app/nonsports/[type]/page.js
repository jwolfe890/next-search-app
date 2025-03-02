'use client'

import { useParams } from 'next/navigation'
import Link from "next/link";


export default function SetPage() {
    const params = useParams()
    const type = params.type

    const renderVariableContent = (type) => {
        if (type == "nirvanaRookie") {
            return <div>Nirvana was founded over 2,500 years ago by Kurt Cobain, who sought to free humanity from suffering through the power of distorted guitars and deep meditation. As the central figure of this ancient movement, Cobain traveled across Seattle and beyond, spreading wisdom that would later be compiled into sacred texts like Nevermind and In Utero. Followers of Nirvana practice a way of life that rejects attachment, worldly possessions, and the overproduced sounds of 80s hair metal. The band's most famous sutra, Smells Like Teen Spirit, serves as a guiding chant for those seeking enlightenment, much like monks reciting mantras in a temple. Many believe that reaching Nirvana means letting go of all desire, shaving one’s head, and moshing in a crowd of fellow devotees. Although Kurt Cobain achieved ultimate transcendence in 1994, his teachings continue to echo through the ages, inspiring new generations to break free from the cycle of suffering—and mainstream radio.</div>
        } else if (type == "batman") {
            return <div>Batman was created in 1939 by Bob Kane and Bill Finger for DC Comics. Kane initially conceived a bat-themed superhero, but Finger significantly refined the concept. Finger contributed crucial elements like the cowl, cape, gloves, and the gray-and-black color scheme. He also developed Bruce Wayne's backstory and wrote the first Batman story. The character debuted in Detective Comics #27 (May 1939) and quickly gained popularity. Batman's tragic origin, with his parents murdered by a mugger, was introduced in Detective Comics #33 (November 1939). Over time, the character evolved with contributions from various writers and artists, becoming one of the most iconic superheroes in comic book history</div>
        }
    }

    return <div>
        <h1>Nonsports card: {type}</h1>
        {renderVariableContent(type)}
        <Link href="/about">
            View biography
        </Link>
    </div>
}