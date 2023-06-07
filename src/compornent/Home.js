import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
<>
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img className="object-cover object-center rounded-xl shadow-xl" alt="hero" src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-white">Crypto &
          <br className="hidden lg:inline-block"/> Exchange
        </h1>
        <p className="mb-8 leading-relaxed">A cryptocurrency exchange, or a digital currency exchange (DCE), is a business that allows customers to trade cryptocurrencies or digital currencies for other assets, such as conventional fiat money or other digital currencies. Exchanges may accept credit card payments, wire transfers or other forms of payment in exchange for digital currencies or cryptocurrencies. A cryptocurrency exchange can be a market maker that typically takes the bid–ask spreads as a transaction commission for its service or, as a matching platform, simply charges fees.</p>
        
      </div>
    </div>
  </section>
   <section>
   <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 Crypto & Exchanges —
        <Link  className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@Ritesh</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link className="text-gray-400">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-gray-400">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-gray-400">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-gray-400">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
    </div>
   </section>
  </>
  
  )
}

export default Home
