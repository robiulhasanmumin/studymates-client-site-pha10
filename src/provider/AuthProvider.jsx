import { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {

  const [user, serUser] = useState(null)
  const [loading, setLoading]= useState()

  const authInfo={
    
  }
  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider