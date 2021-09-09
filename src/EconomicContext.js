import React, {createContext,useEffect,useState} from 'react';

import axios from 'axios';
export const EconomicContext = createContext()

export const EconomicContextProvider= (props)=>{
    const [data,setData]= useState()
    const apiKey= "a39a4eb4fe7e43209572034baa2544f4";
    useEffect(()=>{
        axios.get(`
        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
        ).then(
            (response)=>setData(response.data)
        ).catch(
        (error)=>console.log(error)
        )
    },[data])
    return(
        <EconomicContext.Provider value={{data}}>
            {props.children}
        </EconomicContext.Provider>
    )
} 