import React from 'react'

const Card = ({data}) => {
  console.log(data);
  return (
    <div className='grid grid-cols-1 gap-3 w-auto mx-auto sm:grid sm:grid-cols-1 sm:gap-3 sm:w-11/12
    md:grid md:grid-cols-2 md:gap-4 md:w-11/12 lg:grid lg:grid-cols-3 lg:gap-6 lg:w-11/12 '>
       {data.map((curItem,index)=>{
           if(!curItem.urlToImage){
               null;
           }
           else{
               return(
               <div key={index}  className='bg-white shadow-lg rounded-lg flex flex-col justify-between min-h-[300px] p-2 '>
                 <img src={curItem.urlToImage} className='w-full h-48 object-cover'/>
                 <div className=''>
                    <a className='w-full h-48 object-cover underline decoration-1 cursor-pointer hover:bg-gray-300' onClick = {() => window.open(curItem.url)}>{curItem.title}</a>
                    <p className='text-gray-600 mt-2 mb-12 text-sm  '>{curItem.description}</p>
                    <button className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center items-end ' onClick = {() => window.open(curItem.url)}>Read More</button>
                 </div>
             </div>
             );
           }
    })}
    </div>
  );
}

export default Card