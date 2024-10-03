'use client'

import { Input } from "@/components/ui/input"
import Link from "next/link";
import { Enviroment } from "@/types/enviroment";

import { useState, useEffect } from "react"
import axios from "axios"

import { fetchHomeEnviromentsForUser } from "@/api/enviroment";
import { useAlerts } from "@/components/alert/Alert";
import { HomeEnviroment } from "@/types/HomeEnviroments";

export default function NotespaceList() {
    let [notespaces, setNotespaces] = useState<HomeEnviroment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const { addAlert } = useAlerts();

    useEffect(() => {
        const fetchNotespaces = async () => {
            try {
                setIsLoading(true)
                setError(null)


                const userId = 1
                const fetchedNotespaces = await fetchHomeEnviromentsForUser(userId)
                setNotespaces(fetchedNotespaces)
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.code === 'ECONNABORTED') {
                      setError("Request timed out. Please try again.")
                    } else {
                      setError(err.response?.data?.message || "An error occurred while fetching notespaces.")
                    }
                  } else {
                    setError("An unexpected error occurred.")
                  }
                addAlert(`An error occurred while fetching notespaces.`, "error");
                console.error("Error fetching notespaces:", err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotespaces()
    }, [addAlert])

    const filteredNotespaces = notespaces && Array.isArray(notespaces)
        ? notespaces.filter((notespace) =>
            notespace.enviromentName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className="border-solid border-gray-800 border rounded-lg p-3 space-y-4">
            <h2 className="text-sm font-semibold mb-2">Top repositories</h2>
            <Input
                className="bg-gray-900 focus:text-white border-gray-800 focus:bg-gray-800"
                placeholder="Find a repository..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); addAlert("Changed", "success") }}
            />
            {isLoading ? (
                <div className="text-center">Loading notespaces...</div>
            ) : error ? (
                <div className="bg-red-900/20 border border-red-900/50 text-red-500 p-3 rounded-md">
                    {error}
                </div>
            ) : filteredNotespaces.length > 0 ? (
                <ul className="space-y-2 ml-2">
                    {filteredNotespaces.map((notespace) => (
                        <li key={notespace.enviromentId} className="flex items-center hover:bg-gray-900 p-1 rounded-sm">
                            <Link href={`/${notespace.authorName}/${notespace.enviromentName}`}> 
                                <div className="w-6 h-6 rounded-full bg-gray-700 mr-2"></div>
                                {notespace.authorName}/{notespace.enviromentName}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-500">No notespaces found.</div>
            )}
        </div>
    );
}