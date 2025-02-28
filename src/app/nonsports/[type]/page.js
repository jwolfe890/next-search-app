'use client'

import { useParams } from 'next/navigation'
import Link from "next/link";

export default function SetPage() {
    const params = useParams()
    const type = params.type

    return <div>
        <h1>Nonsports card: {type}</h1>
        <Link href="/about">
            View biography
        </Link>
    </div>
}