import React, { useState } from 'react'
import { createContext } from 'react'

const Context = createContext()

export default function CtxApp({children}) {
    const [songs, setSongs] = useState([])
    const [favs,setFavs] = useState([])
    const [current,setCurrent] = useState([])

    return (
        <Context.Provider value={{songs,setSongs,favs,setFavs,current,setCurrent}}>
            {children}
        </Context.Provider>
    )
}

export { Context, CtxApp }
