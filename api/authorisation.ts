import axios from "axios";
import { TIMEOUT } from "./fetchConstant";



export async function logIn(mail: string, hashedPass: string): Promise<string[]>{
    try {
        const JWT = await axios.get("http://localhost:8000/api/login", {
            params: {mail, hashedPass},
            timeout: TIMEOUT
        });
        return JWT.data;
    } catch (err){
        console.log("Failed login attempt.");
        throw err;
    }
}