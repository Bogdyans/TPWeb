import axios from "axios";
import { API_URL, TIMEOUT } from "./fetchConstant";


const api = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT
});


export async function authenticate(email: string, pass: string) {
  try {
    const res = await api.post("/api/v1/auth/authenticate", {
      email: email,
      password: pass
    });
    
    localStorage.setItem("refreshToken", res.data.refresh_token);
    localStorage.setItem("accessToken", res.data.access_token);
    return res.data.access_token;
  } catch (err) {
    console.log("Failed login attempt.");
    console.log(err);
    throw err;
  }
}

export async function register(username: string, email: string, password: string): Promise<string> {
  try {
    const res = await api.post("/api/v1/auth/register", {
      username, email, password
    });
    
    localStorage.setItem("refreshToken", res.data.refresh_token);
    localStorage.setItem("accessToken", res.data.access_token);
    return res.data.access_token;
  } catch (err) {
    console.log("Failed register attempt.");
    throw err;
  }
}

export async function validateToken(token: string): Promise<boolean> {
  try {
    const response = await api.get("/api/v1/auth/validate-token", {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.status === 200;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
}