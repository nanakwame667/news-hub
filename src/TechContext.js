import React, {createContext,useEffect,useState} from 'react';

import axios from 'axios';
export const TechContext = createContext()

export const TechContextProvider= (props)=>{
    const [data,setData]= useState()
    const apiKey= "a39a4eb4fe7e43209572034baa2544f4";
    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        ).then(
            (response)=>setData(response.data)
        ).catch(
        (error)=>console.log(error)
        )
    },[data])
    return(
        <TechContext.Provider value={{data}}>
            {props.children}
        </TechContext.Provider>
    )
} 