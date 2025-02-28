'use client'

import { useParams } from 'next/navigation'
import Link from "next/link";

export default function SetPage() {
    const params = useParams()
    const setName = params.setName

    return <div>
        <h1>Set: {setName}</h1>
        <Link href="/about">
            View biography
        </Link>
        <Link href="/nonSports/nirvanaRookie">
            View Nirvana rookie
        </Link>
    </div>
}