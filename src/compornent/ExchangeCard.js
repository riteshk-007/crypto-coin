import React from 'react'

function ExchangeCard({name, url, rank, img}) {
 
  return (
    <>
            <a href={url} target='blank' className='sm:w-3/4 md:w-48 md:h-48 lg:w-56  shadow-xl rounded-md m-4 cursor-pointer w-40 h-40 flex items-center justify-evenly flex-col transition-all duration-500 hover:scale-105'>
                <img src={img} alt="exchanges" className='h-16 w-16 object-cover'/>
                <h2 className='font-semibold'>{rank}</h2>
                <h1 className='font-bold'>{name}</h1>
            </a>
    </>
  )
}

export default ExchangeCard
