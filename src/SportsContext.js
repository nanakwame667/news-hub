import React, {createContext,useEffect,useState} from 'react';

import axios from 'axios';
export const SportsContext = createContext()

export const SportsContextProvider= (props)=>{
    const [data,setData]= useState()
    const apiKey= "a39a4eb4fe7e43209572034baa2544f4";
    useEffect(()=>{
        axios.get(`
        https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${apiKey}`
        ).then(
            (response)=>setData(response.data)
        ).catch(
        (error)=>console.log(error)
        )
    },[data])
    return(
        <SportsContext.Provider value={{data}}>
            {props.children}
        </SportsContext.Provider>
    )
} 