import axios from "axios";
import { API_URL, TIMEOUT } from "./fetchConstant";



export async function authenticate(email: string, pass: string) {
    try {
        const res = await axios.post(`${API_URL}/api/v1/auth/authenticate`, {
            email: email,
            password: pass
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: TIMEOUT
        });
        localStorage.setItem("refreshToken", res.data.refresh_token)
        localStorage.setItem("accessToken", res.data.access_token)

    } catch (err) {
        console.log("Failed login attempt.");
        console.log(err);
        throw err;
    }
}

export async function register(username: string, email: string, password: string): Promise<boolean> {
    try {
        const res = await axios.post(`${API_URL}/api/v1/auth/register`, {
            username, email, password
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: TIMEOUT
            });
            
        localStorage.setItem("refreshToken", res.data.refresh_token)
        localStorage.setItem("accessToken", res.data.access_token)
        return true;
    } catch (err) {
        console.log("Failed register attempt.");
        throw err;
    }
}