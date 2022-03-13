import React, { useContext, useState } from "react"


const AuthContext = React.createContext()
const collegeUpdateContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}
export function useCollegeUpdate(){
    return useContext(collegeUpdateContext)
}

export function AuthProvider({ children }) {
  const [currentCollege, setcurrentCollege] = useState('')
  

  
  function createCollege(name) {
    setcurrentCollege(name)
    return currentCollege
  }

  const value = {
    currentCollege,
  }

  return (
    <AuthContext.Provider value={value}>
        <collegeUpdateContext.Provider value={createCollege}>
        {children}
        </collegeUpdateContext.Provider>
    
    </AuthContext.Provider>
  )
}