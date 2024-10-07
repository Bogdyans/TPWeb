'use client'

import { fetchData } from "@/api/files"
import { File } from "@/types/file"
import { useEffect } from "react"

export default function ViewFiles({ params }: any, { file }: File) {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await fetchData(file);
            }catch (err){

            }
        }
    })

    return (
        <div>
            <h1>{params.username} / {params.notespace}</h1>
        </div>
    )
}