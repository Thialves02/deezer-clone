import React, { useState } from 'react'
import { createContext } from 'react'

const Context = createContext()

export default function CtxApp({children,preview}) {
    const [songs, setSongs] = useState([])
    const [favs,setFavs] = useState([])

    return (
        <Context.Provider value={{songs,setSongs,favs,setFavs}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }
