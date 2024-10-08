import axios from 'axios';
import { HomeEnviroment } from '@/types/HomeEnviroments';
import { EnviromentInfo } from '@/types/enviroment';
import { API_URL, TIMEOUT } from './fetchConstant';

export async function fetchHomeEnviromentsForUser(userId: number): Promise<HomeEnviroment[]> {
    try {
        const response = await axios.get<HomeEnviroment[]>(`${API_URL}/api/v1/environment/home`, {
            params: { userId },
            timeout: TIMEOUT
        }
        );
        return response.data;
    } catch (error) {
        console.log("Error fetching home enviroments to the left menu");
        throw error;
    }
}

export async function fetchEnviroment(id: number): Promise<EnviromentInfo> {
    try {
        const response = await axios.get<EnviromentInfo>(`${API_URL}/api/v1/enviroment/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching Enviroment");
        throw error;
    }
}

