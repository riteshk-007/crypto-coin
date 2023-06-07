import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { server } from '..'
import {  L40 } from 'react-isloading'
import Error from './Error'
import CoinCard from './CoinCard'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



function Coins() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [currency, setCurrency] = useState('inr')


  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'

const changePage = (page) =>{
  setPage(page);
  setLoading(true)
}

const btns = new Array(132).fill(1);
      useEffect(()=>{
          const fetchCoins = async ()=>{
          try {
              const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
              setCoins(data)
              setLoading(false)
          } catch (error) {
            setError(true)
            setLoading(false)
          }
          }
          fetchCoins()
      },[currency, page])

      if(error) return <Error msg="Error While Fetching Coins : ("/>

  return (
    <>
    <div className="container m-auto my-2 p-2">
    <FormControl value={currency} onChange={(e)=> setCurrency(e.target.value)}>
      <FormLabel id="demo-row-radio-buttons-group-label">Currency</FormLabel>
      <RadioGroup
        row
        defaultValue="inr"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="inr" control={<Radio />} label="₹ INR" />
        <FormControlLabel value="usd" control={<Radio />} label="$ USD" />
        <FormControlLabel value="eur" control={<Radio />} label="€ EUR" />
      </RadioGroup>
    </FormControl>
    </div>
       

    <div className="container m-auto flex items-center justify-evenly flex-wrap my-3">
          {
            loading ? <L40
            style={{
              height: "13rem", width: "15rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}  />
               : <>
               {
                coins.map((item)=>{
                  return(
                      <CoinCard 
                      key={item.id}
                      name={item.name}
                      img={item.image}
                      symbol={item.symbol}
                      price={item.current_price}
                      currencySymbol={currencySymbol}
                      id={item.id}/>
                  
                  )
                })
               }
                     </>
          }
    </div>
    <div className="container m-auto flex items-center p-10 overflow-x-auto">
      {
        btns.map((item, index)=>{
          return(
            <button onClick={()=> changePage(index  + 1)}
            type="button"
            key={index}
            className="mx-2 inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
            {index + 1}
          </button>
          )
        })
      }

    </div>
    </>
  )
}

export default Coins

