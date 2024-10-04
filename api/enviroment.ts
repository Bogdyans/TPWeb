import axios from 'axios';
import { HomeEnviroment } from '@/types/HomeEnviroments';
import { Enviroment } from '@/types/enviroment';
import { TIMEOUT } from './fetchConstant';

export async function fetchHomeEnviromentsForUser(userId: number): Promise<HomeEnviroment[]> {
    try {
        const response = await axios.get<HomeEnviroment[]>('http://localhost:8000/api/environment/home', {
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

export async function fetchEnviroment(id: number): Promise<Enviroment> {
    try {
        const response = await axios.get<Enviroment>(`/api/enviroment/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching Enviroment");
        throw error;
    }
}