import React from 'react'
import { Link } from 'react-router-dom'

function CoinCard({id, name, price, symbol, img, currencySymbol}) {
  return (
    <>
       <Link to={`/coin/${id}`} className='sm:w-3/4 md:w-48 md:h-48 lg:w-56 shadow-xl rounded-md m-4 cursor-pointer w-40 h-40 flex items-center justify-evenly flex-col transition-all duration-500 hover:scale-105'>
                <img src={img} alt="Coins" className='h-16 w-16 object-cover'/>
                <h2 className='font-semibold'>{symbol}</h2>
                <h1 className='font-bold text-sm text-gray-400'>{name}</h1>
                <h2 className='font-semibold'>{price ? `${currencySymbol} ${price}`: 'NA'}</h2>
            </Link>
    </>
  )
}

export default CoinCard
