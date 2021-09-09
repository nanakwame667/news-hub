import React, {createContext,useEffect,useState} from 'react';

import axios from 'axios';
export const NewsContext = createContext()

export const NewsContextProvider= (props)=>{
    const [data,setData]= useState()
    const apiKey= "a39a4eb4fe7e43209572034baa2544f4";
    useEffect(()=>{
        const newsData= async()=>{
            const response = await  axios.get(`
            https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`
            )
            setData(response.data)
        };
        newsData();
    },[data])
    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
} 