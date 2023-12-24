/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential
} from 'firebase/auth';
import { auth, db } from "../firebase-config"
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null
  logIn: (email: string, password: string) => void ;
    logOut: () => void ;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null)

  

  const logIn = async (email: string, password: string) => {
     try {
       const userCred = await signInWithEmailAndPassword(auth, email, password)
       setUser(userCred.user)
     } catch (error: any) {
      console.error(error.message)
     }
    
   }
  const logOut = async () => {
    try {
      await signOut(auth)
    setUser(null)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
   setUser(user)
    })

   return () => {unsubscribe()}
  }, [])        

  const value = {logIn, logOut, user }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext)
}