import React,{createContext,useState} from 'react';

export const  fireContext = createContext();

const FireContextProvider = (props) => {
    
    const[fire, setFire]=useState(0)

    

    return(
        <fireContext.Provider value={{fire, setFire}}>

        {props.children}

        </fireContext.Provider>
     )
    }
    
    export default FireContextProvider