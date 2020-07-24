import React, { useState } from 'react';
import Context from './auth';
import useStorage from './useStorage';


const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token')
    return(
        <Context.Provider
            value={{token,
                 setToken}}
                 >
                     {children}
       </Context.Provider>
    )
}

export default StoreProvider;