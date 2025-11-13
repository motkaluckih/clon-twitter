'use client'

import { useSearchParams } from "next/navigation"

export function Explore() {
    const searchParams = useSearchParams()
    const teg = searchParams.get("tag")

    return <div>
        <h1 className="text-3xl font-bold mb-6">Explore {!!teg && `by # ${teg}`}</h1>
    </div>
}