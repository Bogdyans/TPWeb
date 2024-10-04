import { getRootFiles } from "@/api/files";
import { useAlerts } from "@/components/alert/Alert";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react"
import { File } from "@/types/file";
import { rootFiles } from "../mocks/rootFiles";
import Link from "next/link";
import { HomeEnviroment } from "@/types/HomeEnviroments";



export default function RootFileList({ author, notespace }: HomeEnviroment) {
    

    let [files, setFiles] = useState<File[]>([]);
    const [state, setState] = useState("Loading");
    const [searchTerm, setSearchTerm] = useState("");

    const { addAlert } = useAlerts();


    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const fetchedFiles = await getRootFiles(author, notespace);
                setFiles(fetchedFiles);
                setState("Success");
            } catch (err) {
                addAlert("Error fetching files", "error");
                //setState("Error");
                setFiles(rootFiles);
                setState("Succes");
                console.error("Error fetching files: ", err);
            }
        }

        fetchFiles();
    }, [addAlert]);

    const filteredFiles = files && Array.isArray(files)
        ? files.filter((file) =>
            file.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    return (
        <div className="col-span-2">
            <Input className="mb-4" placeholder="Find a note..." />
            {state == "Loading" ? (
                <div className="text-center">Loading files...</div>
            ) : state == "Error" ? (
                <div className="text-center color-red-700">Error</div>
            ) : filteredFiles.length > 0 ? (
                <ul className="space-y-2">
                    {filteredFiles.map((item) => (
                        <li key={filteredFiles.indexOf(item)} className="flex items-center justify-between p-2 hover:bg-gray-800 rounded">
                            <Link href={`/${author}/${notespace}/view`}><span>{item.name}</span></Link>
                            <span className="text-gray-400 text-sm">Last updated 2 days ago</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-500">No files found.</div>
            )
            }
          </div>
    )
}