import {createContext, useState} from 'react'

export const ContextCont = createContext(null)


export const PuntosContext = ({children}) =>{

const [contador1,setContador1] = useState(0)
const [contador2, setContador2] = useState(0)
    return (

        <ContextCont.Provider value={{contador1, setContador2, contador2,setContador1}}>
            {children}
        </ContextCont.Provider>

    )
}

export default PuntosContext