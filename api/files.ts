import { File } from "@/types/file";
import axios from "axios";
import { TIMEOUT } from "./fetchConstant";


export async function getRootFiles(username: string, notespace: string): Promise<File[]> {
    try {
        const res = await axios.get('http://localhost:8000/api/files/root', {
            params: { username, notespace },
            timeout: TIMEOUT
        }
        );
        return res.data;
    } catch (err) {
        console.log("Error fetching files for environment");
        throw err;
    }
}

export async function fetchData(file: File): Promise<string>{
    if (file.isDirectory){
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