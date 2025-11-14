import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading]= useState()
  
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    return signOut(auth)
  }
  const updateUser=(currentUser)=>{
    return updateProfile(auth.currentUser, currentUser)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unSubscribe()
    }
  },[])



  const authInfo={
     user,
     setUser,
    loading,
    setLoading,
    createUser,
    updateUser,
    logIn,
    logOut,
    googleSignIn
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider