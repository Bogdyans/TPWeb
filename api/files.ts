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