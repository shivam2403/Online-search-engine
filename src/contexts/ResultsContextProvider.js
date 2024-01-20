import { createContext, useContext, useState } from "react";
import { RapidAPI_Key } from "../utils";
import { RapidAPI_key2 } from "../utils";

const ResultContext=createContext();
const baseUrl="https://google-search72.p.rapidapi.com";

export const ResultContextProvider=({children})=> {
    const [results,setResults]=useState([]);
    const [news,setNews]=useState([]);
    const [videos,setVideos]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [searchTerm,setSearchTerm]=useState('');

    // type => search, images
    const getResults=async(type)=>{
        setIsLoading(true);

        const response=await fetch(`${baseUrl}${type}`,{
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
          }
        });

        const data=await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    const getNews=async(type)=>{
      setIsLoading(true);

      const response=await fetch(`https://news-api14.p.rapidapi.com/search?q=${type}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RapidAPI_key2,
          'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
        }
      });

      const data=await response.json();
      console.log(data);

      setNews(data);
      setIsLoading(false);
  }

  const getVideos=async(type)=>{
    setIsLoading(true);

    const response=await fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${type}`,{
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f94cf87807msheb3bf4ce58020b0p1963e7jsncfc8c849b255',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    });

    const data=await response.json();
    // console.log(data);

    setVideos(data);
    setIsLoading(false);
}

        return (<ResultContext.Provider value={{getNews, news, getVideos, videos, getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>)
}

export const useResultContext=() => useContext(ResultContext);