'use client'

import { Input } from "@/components/ui/input"
import Link from "next/link";


import { useState, useEffect } from "react"


import { fetchHomeEnviromentsForUser } from "@/api/enviroment";
import { useAlerts } from "@/components/alert/Alert";
import { HomeEnviroment } from "@/types/HomeEnviroments";
import { listEnv } from "../mocks/EnviromentList";

export default function NotespaceList() {
    let [notespaces, setNotespaces] = useState<HomeEnviroment[]>([]);
    const [state, setState] = useState("Loading");
    const [searchTerm, setSearchTerm] = useState("");

    const { addAlert } = useAlerts();

    useEffect(() => {
        const fetchNotespaces = async () => {
            try {
                const userId = 1;
                const fetchedNotespaces = await fetchHomeEnviromentsForUser(userId);
                setNotespaces(fetchedNotespaces);
                setState("Success");
            } catch (err) {

                setNotespaces(listEnv);
                //setState("Error");
                addAlert(`An error occurred while fetching notespaces.`, "error");
                console.error("Error fetching notespaces:", err);
            } 
        }

        fetchNotespaces();
    }, [addAlert]);

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
            {state == "Loading" ? (
                <div className="text-center">Loading notespaces...</div>
            ) : state == "Error" ? (
                <div className="bg-red-900/20 border border-red-900/50 text-red-500 p-3 rounded-md">
                    Error
                </div>
            ) : filteredNotespaces.length > 0 ? (
                <ul className="space-y-2 ml-2">
                    {filteredNotespaces.map((notespace) => (
                        <li key={notespaces.indexOf(notespace)} className="flex items-center hover:bg-gray-900 p-1 rounded-sm">
                            <Link href={`/${notespace.authorName}/${notespace.enviromentName}`}>
                                <div className="w-6 h-6 rounded-full bg-gray-700 mr-2"></div>
                                {notespace.authorName} / {notespace.enviromentName}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-500">No notespaces found.</div>
            )
            }
        </div >
    );
}