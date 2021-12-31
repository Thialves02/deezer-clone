import React, { useState } from 'react'
import { createContext } from 'react'

const Context = createContext()

export default function CtxApp({children,preview}) {
    const [songs, setSongs] = useState([])
    
    return (
        <Context.Provider value={{songs,setSongs}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }
