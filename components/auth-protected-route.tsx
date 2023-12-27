/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { useAuth } from '@/lib/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const AuthProtectedRoute = ({ children }: { children: React.ReactNode }) => {
const router = useRouter();
const { user } = useAuth();

    useEffect(() => {
    if (user) {
      router.push('/admin/dashboard');
    } 
    }, []);

    return <>{children}</>;
};

export default AuthProtectedRoute;