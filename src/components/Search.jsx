import React, { useEffect, useState } from 'react'
import SearchLinks from './SearchLinks'
import { useResultContext } from '../contexts/ResultsContextProvider';
import { useDebounce } from 'use-debounce';

const Search = () => {
  const [text,setText]=useState("");
  const {setSearchTerm}=useResultContext();
  const [debouncedValue]=useDebounce(text,300);

  useEffect(()=>{
    if(debouncedValue)setSearchTerm(debouncedValue);
  },[debouncedValue])

  return (
    <div className='ml-auto mr-auto relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input placeholder='Search Google' value={text} type='text' className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg' onChange={(e)=>setText(e.target.value)}/>
      {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
      )}
      <SearchLinks/>
    </div>
  )
}

export default Search