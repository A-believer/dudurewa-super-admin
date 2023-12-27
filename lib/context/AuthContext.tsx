/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import { auth, db } from "../firebase-config"
import { v4 as uuidv4 } from 'uuid';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
interface AuthContextProps {
  children: ReactNode;
}

interface AuthProviderProps {
   user: User | null;
    signUp: (email: string, password: string, userName: string) => Promise<void>
  logIn: (email: string, password: string) => Promise<void> ;
  logOut: () => Promise<void>;
  todo: string[];
  addTodoHandler: (title:string, description: string) => Promise<void>
}

interface TodoProps {
  id: string
  title: string
  status: boolean
  description: string
}
const AuthContext = createContext<AuthProviderProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
   const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [loadingTodo, setLoadingTodo] = useState<boolean>(true)
  const [todo, setTodo] =useState<string[]>([])
      const todoRef = collection(db, "Todos")
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

  const addTodoHandler = async(title:string, description: string) => {
    try {
      await setDoc(doc(db, "Todos", uuidv4()), {
        title: title,
        description: description,
        status: false
      });
    } catch (error: any) {
      console.log({error})
    }
  }

  const getTodoList = async () => {
    try { 
      await getDocs(todoRef)
        .then((data: any) => {
          const allTodo = data.docs.map((doc: any) => ({
            ...doc.data(),
            id: doc.id
          }))
          setTodo(allTodo)
        })
          setLoadingTodo(false)
      
      console.log(todo)
    } catch (error: any) {
      toast.error('failed to fetch todos!!')
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

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
    logIn, logOut, user, signUp, todo, addTodoHandler
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
