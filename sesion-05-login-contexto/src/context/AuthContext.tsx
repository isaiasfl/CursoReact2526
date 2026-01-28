import { createContext, use, useState, type ReactNode } from "react"

interface User {
  email:string
}

interface AuthContextType {
  user: User | null
  login: (email:string, password:string)=> boolean
  logout: () => void;
}

// creamos el almacen global que podremos usar en cualquier componente
const AuthContext = createContext< AuthContextType | null>(null)


// crear el provider o proveedor que envuelva donde usar el contexto
export const AuthProvider=({ children} : { children :ReactNode})=>{
  const [user, setUser] = useState<User| null>(null)
  // --- login
  const login = (email:string,password:string): boolean =>{
    if(email==="admin@admin.com" && password === "1234"){
      setUser({email})
      return true
    }
    return false
  }

  // --- logout
  const logout = () => {
    setUser(null)
  }



  const value = {
    user,
    login,
    logout
  }

  return (
    <AuthContext value={value}>{children}</AuthContext>
  )
}



// para usar el contexto creo un hook personalizado por mi
export function useAuth() {
  const context = use(AuthContext)
  if(context === undefined){
    throw new Error("Error al usar el contexto global")
  }
  return context
}