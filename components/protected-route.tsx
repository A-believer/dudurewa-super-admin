/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
const router = useRouter();
const { user } = useAuth();

    useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    } 
    }, []);

    return <>{children}</>;
};

export default ProtectedRoute;