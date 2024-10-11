import axios from 'axios';
import { HomeEnviroment } from '@/types/HomeEnviroments';
import { EnviromentInfo } from '@/types/enviroment';
import { API_URL, TIMEOUT } from './fetchConstant';
import { validateToken } from './authorisation';

export async function fetchHomeEnviromentsForUser(): Promise<HomeEnviroment[]> {

    const token = localStorage.getItem("accessToken");
    
    try {

        const response = await axios.get<HomeEnviroment[]>(`${API_URL}/api/v2/notespaces`, {
            timeout: TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        );
        return response.data;
    } catch (error) {
        console.log("Error fetching home enviroments to the left menu");
        throw error;
    }
}
export async function createEnviroments(name:string, isPublic: boolean) {

    const token = localStorage.getItem("accessToken");
    
    try {
        await axios.post(`${API_URL}/api/v2/notespaces`, {
            name,
            isPublic
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
    } catch (error) {
        console.log("Error fetching home enviroments to the left menu", error);
        throw error;
    }
}

export async function fetchEnviroment(id: number): Promise<EnviromentInfo> {
    try {
        const response = await axios.get<EnviromentInfo>(`${API_URL}/api/v2/notespaces/get`);
        return response.data;
    } catch (error) {
        console.log("Error fetching Enviroment");
        throw error;
    }
}

