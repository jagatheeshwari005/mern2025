
import { createContext } from 'react';

export const Context = createContext();

 export const UserContext = ({children}) =>{
  const user ={name:"jaga",phno:"1234567890"}
  return(
    <Context.Provider value={user}>
        {children}
        </Context.Provider>
  )
}

export default Context