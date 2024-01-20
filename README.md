const url="https://google-search72.p.rapidapi.com/search?q=worldcup videos";
  const [results,setResults]=useState();

  const getResults=async()=>{
    const response=await fetch(url,{
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0a88f143c8msha4bebee1a286bddp1d94fcjsnba4345bf4f8e',
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
      }
    });

    const data=await response.json();
    setResults(data);
  }

  useEffect(()=>{
    getResults();
  },[])

  console.log(results);


  ${darkTheme ? 'border-gray-700' : 'border-gray-200'}`