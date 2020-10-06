import React,{createContext,useState} from 'react';

export const  airContext = createContext();

const AirContextProvider = (props) => {
    
    const[air, setAir]=useState(0)

    

    return(
        <airContext.Provider value={{air , setAir}}>

        {props.children}

        </airContext.Provider>
     )
    }
    
    export default AirContextProvider