"use client"
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from "../firebase-config"

interface AuthContextProps {
    user: User | null;
    signUp: (email: string, password: string, userName: string) => Promise<void>
  logIn: (email: string, password: string) => Promise<void> ;
    logOut: () => Promise<void> ;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const UserAuth = () => {
 const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {
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
         console.log("user")
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

   if (loading) {
    // If still loading, you can return a loading indicator or null
    return console.log("loading")  
  }

  return (
    <AuthContext.Provider value={{logIn, logOut, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

