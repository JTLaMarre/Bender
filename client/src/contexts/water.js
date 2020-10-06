import React,{createContext,useState} from 'react';

export const  waterContext = createContext();

const WaterContextProvider = (props) => {
    
    const[water, setWater]=useState(0)

    

    return(
        <waterContext.Provider value={{water , setWater}}>

        {props.children}

        </waterContext.Provider>
     )
    }
    
    export default WaterContextProvider