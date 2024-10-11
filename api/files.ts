import { FileV } from "@/types/file";
import axios from "axios";
import { API_URL, TIMEOUT } from "./fetchConstant";


export async function getRootFiles(notespace: string): Promise<FileV[]> {
    const token = localStorage.getItem("accessToken");

    try {
        const res = await axios.get(`${API_URL}/api/files?notespace=${notespace}`, {
            timeout: TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        );
        return res.data;
    } catch (err) {
        console.log("Error fetching files for environment");
        throw err;
    }
}

export async function fetchData(file: FileV): Promise<string>{
    if (file.type == "D"){
        console.log("fetching data for not a file, but directory - ERROR")
        throw "ERrror";
    }
    const id = file.id;
    try {
        const res = await axios.get('http://localhost:8000/api/files/data', {
            params: { id },
            timeout: TIMEOUT
        });
        return res.data;
    } catch (err) {
        console.log("Error fetching data from file");
        throw err;
    }
}