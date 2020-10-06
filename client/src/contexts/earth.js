import React,{createContext,useState} from 'react';

export const  earthContext = createContext();

const EarthContextProvider = (props) => {
    
    const[earth, setEarth]=useState(0)

    

    return(
        <earthContext.Provider value={{earth , setEarth}}>

        {props.children}

        </earthContext.Provider>
     )
    }
    
    export default EarthContextProvider