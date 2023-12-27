"use client"
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import { auth } from "../firebase-config"
interface AuthContextProps {
  children: ReactNode;
}

interface AuthProviderProps {
   user: User | null;
    signUp: (email: string, password: string, userName: string) => Promise<void>
  logIn: (email: string, password: string) => Promise<void> ;
    logOut: () => Promise<void> ;
}

const AuthContext = createContext<AuthProviderProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

    const signUp = async (email: string, password: string, userName: string) => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
       
    } catch (error: any) {
      console.error(error.message)
    }
  };

  const logIn = async (email: string, password: string) => {
     try {
        await signInWithEmailAndPassword(auth, email, password)
         console.log("logged out")
     } catch (error: any) {
      console.error(error.message)
     }
   }
  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setLoading(false)
          if (user) {
          setUser(user)
console.log("user")
          } else {
            setUser(null)
console.log("null")         
          }
      })
   return () => unsubscribe()
  }, [])        

  const authProviderValue: AuthProviderProps = {
    logIn, logOut, user, signUp
  };

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
