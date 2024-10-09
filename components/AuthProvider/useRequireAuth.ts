
'use client'

import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRequireAuth = () => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/wellcome"); // Redirect to login if not authenticated
        }
        
    }, [isAuthenticated, router]);

    return isAuthenticated;
};