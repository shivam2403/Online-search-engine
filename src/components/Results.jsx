import React, { useEffect } from 'react'
import { useResultContext } from '../contexts/ResultsContextProvider'
import { useLocation } from 'react-router-dom';
import Loading from './Loading';
import {Link} from "react-router-dom"

const Results = () => {
    const {results,isLoading,getResults,getNews,getVideos,videos,news,searchTerm,setSearchTerm}=useResultContext();
    const location=useLocation();

    useEffect(()=>{
      if(location.pathname==='/videos'){
        // console.log("YES");
        // console.log(searchTerm)
        getVideos(searchTerm);
      }
      else if(location.pathname==='/news'){
        getNews(searchTerm);
      }else{
        getResults(`${location.pathname}?q=${searchTerm}&num=20`)
      }
    },[searchTerm,location.pathname])

    console.log(videos)

    if(isLoading)return <Loading/>;

    switch (location.pathname){
        case '/search':
          return (
            <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
              {results?.items?.map(({ link, title }, index) => (
                <div key={index} className="md:w-2/5 w-full">
                  <a href={link} target="_blank" rel="noreferrer">
                    <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                  </a>
                </div>
              ))}
            </div>
          );
        case '/imagesearch':
          return (
            <div className="flex flex-wrap justify-center items-center">
              {results?.items?.map(({ thumbnailImageUrl, contextLink, title }, index) => (
                <a href={contextLink} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                  <img src={thumbnailImageUrl} alt={title} loading="lazy" />
                  <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
                </a>
              ))}
            </div>
          );
        case '/news':
          return (
            <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
              {news?.articles?.map(({ index, url, title, publisher,published_date }) => (
                <div key={index} className="md:w-2/5 w-full ">
                  <a href={url} target="_blank" rel="noreferrer " className="hover:underline ">
                    <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                  </a>
                  <div className="flex flex flex-col">
                    <a href={url} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {publisher?.name}</a>
                    <span>{new Date(published_date).toString().substring(0,16)}</span>
                  </div>
                </div>
              ))}
            </div>
          );
        case '/videos':
          return (
            <div className="flex flex-wrap">
              {videos?.contents?.map((videoData, index) => {
                const video = videoData.video;
                const videoId = video?.videoId;
                const thumbnails = video?.thumbnails;
                const posterImage = thumbnails?.[0]?.url;
        
                return (
                  <div key={index} className="p-2">
                    <Link to={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
                      <video src={`https://www.youtube.com/watch?v=${videoId}`} poster={posterImage} controls width="355px" height="200px" />
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        // default:
        //   return 'Error...';
      }
}

export default Results