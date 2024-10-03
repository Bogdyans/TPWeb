import axios from 'axios';
import { HomeEnviroment } from '@/types/HomeEnviroments';
import { Enviroment } from '@/types/enviroment';

export async function fetchHomeEnviromentsForUser(userId: number): Promise<HomeEnviroment[]>{
    try {
        const response  = await axios.get<HomeEnviroment[]>('http://localhost:8000/api/environment/home',{
            params: { userId },
            timeout: 5000
        }
        );
        return response.data;
    } catch (error){
        console.log("hi")
        throw error;
        
    }
}

export async function fetchEnviroment(id: number): Promise<Enviroment>{
    try {
        const response = await axios.get<Enviroment>(`/api/enviroment/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}