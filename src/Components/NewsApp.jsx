import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from "./Card"




const Newsapp = () => {
  const [search , setSearch] = useState("india")
  const [newsData , setNewsData] = useState([]);
  const API_KEY = "276359f040c7492c91c04542d3e58864";

  const getData = async() => {
   try{const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
      }catch (error){
          console.error("Error fetching weather data:", error.message);
      }
      
   }
   useEffect( () => {
      getData();
   },[]);
 
   const handleInput = (e) => {
      console.log(e.target.value);
      setSearch(e.target.value)
   }
   const userInput = (e) => {
      console.log(e.target.value)
      setSearch(e.target.value);
      getData();
    } 
  
  return (
    <div className=' flex flex-col items-center gap-6 relative overflow-x-hidden lg:flex lg:flex-col lg:items-center lg:gap-4 '>
       <nav className='flex flex-col justify-center bg-gray-800 w-full items-center fixed top-0 left-0  shadow-md  py-4 px-4 h-40 gap-3 sm:bg-orange-300 sm:px-2 sm:py-2 sm:h-44 md:flex md:flex-auto md:w-full md:h-24 md:items-center md:bg-pink-200 md:flex-row
       lg:flex lg:justify-center lg:p-4 lg:w-full lg:items-center lg:fixed lg:py-8 lg:px-4 lg:h-28 lg:bg-cyan-900'  >
           <div className='flex justify-center w-full text-6xl items-center text-white sm:text-7xl sm:font-serif md:flex-1 md:text-5xl md:font-serif md:text-slate-700 sm:text-slate-800 md:w-44 
           lg:flex-auto lg:w-40 lg:text-6xl lg:ml-0 lg:text-gray-300'>
               <h1>Latest News</h1>
           </div>
           <ul className=' gap-4 text-xl  text-orange-200 sm:text-lg sm:text-red-900 sm:font-bold md:flex-none md:w-44 md:text-lg md:text-pink-900 
           lg:flex-1 lg:w-64 lg:gap-6 lg:text-xl lg:justify-center lg:ml-18 lg:p-0 lg:text-amber-500'>
              <a href= '#' className='mr-5 sm:mr-3 md:mr-3 lg:mr-5'>All News</a>
              <a href = '#'>Latest</a>
           </ul>
           <div className=' flex-end md:flex-none md:w-auto lg:flex-end ' >
              <input type = "text" placeholder='Search News' value={search}  className='bg-white w-36 p-2 text-sm no-underline border-none flex-auto border sm:w-52 md:w-40' onChange={handleInput} />
              <button className='px-4 py-2 bg-blue-500 ml-2 text-white rounded-lg hover:bg-blue-600 transition  'onClick={getData} >Search</button>
           </div>
       </nav>
        <div className='  font-bold text-2xl pt-44 w-auto sm:text-3xl sm:text-red-900 md:text-slate-700 md:text-4xl md:pt-32   '>
            <p className='flex items-center justify-center mx-auto'>
                Stay Update with LatestNews
            </p>
        </div>
        <div className=' flex '>
           <div className=' flex h-auto gap-2 ' >
                <button onClick={userInput} value= "sports"  className=' bg-amber-600 text-white text-sm  rounded  hover:bg-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:text-xl md:px-8 md:py-4 md:bg-pink-800 md:hover:bg-pink-950
                 lg:bg-cyan-800 lg:text-gray-300 lg:hover:bg-cyan-950 lg:text-2xl' >Sports</button>
                <button onClick={userInput} value= "politics"  className=' bg-amber-600 text-white   rounded text-sm  hover:bg-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 md:text-xl md:bg-pink-800 md:hover:bg-pink-950
                lg:bg-cyan-800 lg:text-gray-300 lg:hover:bg-cyan-950 lg:text-2xl'>Politics</button>
                <button onClick={userInput} value= "entertainment"  className=' bg-amber-600 text-white  rounded text-sm  hover:bg-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 md:text-xl md:bg-pink-800 md:hover:bg-pink-950
                lg:bg-cyan-800 lg:text-gray-300 lg:hover:bg-cyan-950 lg:text-2xl'>Entertainment</button>
                <button onClick={userInput} value= "health"  className=' bg-amber-600 text-white  rounded text-sm  hover:bg-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 md:text-xl md:bg-pink-800 md:hover:bg-pink-950
                lg:bg-cyan-800 lg:text-gray-300 lg:hover:bg-cyan-950 lg:text-2xl'>Health</button>
                <button onClick={userInput} value= "fitness"  className=' bg-amber-600 text-white  rounded text-sm  hover:bg-amber-700 px-3 py-2 sm:px-6 sm:py-4 md:px-8 md:py-4 md:text-xl md:bg-pink-800 md:hover:bg-pink-950
                lg:bg-cyan-800 lg:text-gray-300 lg:hover:bg-cyan-950 lg:text-2xl'> Fitness</button>
           </div>
        </div>
        <div>
        {newsData?  <Card data={newsData}/> : null}
        </div>
    </div>
  )
}

export default Newsapp;
