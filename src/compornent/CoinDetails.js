import React, {useState, useEffect} from 'react'
import {  L40 } from 'react-isloading'
import { server } from '..'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Error from './Error'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function CoinDetails() {
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currency, setCurrency] = useState('inr')


  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$'

  const param = useParams()


  useEffect(()=>{
    const fetchCoin = async ()=>{
    try {
        const {data} = await axios.get(`${server}/coins/${param.id}`)

        setCoin(data);
        setLoading(false)
    } catch (error) {
      setError(true)
      setLoading(false)
        }
        }
        fetchCoin()
    },[param.id])

if(error) return <Error msg="Error While Fetching Coin : ("/>
  return (
    <>
        {
            loading ? <L40
            style={{
              height: "13rem", width: "15rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}  /> 
              :
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

    <div className="container m-auto flex items-center justify-center text-gray-400 flex-col">
      <span>Last Update On {Date(coin.market_data.last_updated).split("G")[0]}</span>
      <img src={coin.image.large} alt=""  className='my-4 w-16 h-16 object-cover'/>
      <h1>{coin.name}</h1>
      <h1 className='text-black text-lg font-semibold'>{currencySymbol} {coin.market_data.current_price[currency]}</h1>
      <span className='flex items-center justify-center flex-wrap'>
        {coin.market_data.price_change_percentage_24h > 0 ? <h1 className='text-green-600 font-bold text-sm mx-4'>Increment +</h1>: <h1 className='text-red-600 font-bold mx-4 text-sm'>Decrement -</h1>}
        {coin.market_data.price_change_percentage_24h}%</span>
        <h1 className='text-xl text-white bg-black p-1 m-2'>{`#${coin.market_cap_rank}`}</h1>
        <div className="flex items-center justify-between flex-col">
          <span className='my-4 text-black'><label className='bg-green-600 text-white px-2 py-1 m-4'>High</label> {`${currencySymbol} ${coin.market_data.high_24h[currency]}`}</span>
          <span className='my-4 text-black'><label className='bg-red-600 text-white px-2 py-1 m-4'>Low</label> {`${currencySymbol} ${coin.market_data.low_24h[currency]}`}</span>
        </div>
        <h1 className='text-black  text-xl'>24H Supply (Range)</h1>
        <div className="container m-auto flex items-center justify-between flex-col font-mono p-2">
                <p className='w-full flex items-center justify-between text-black text-lg my-4 '><label className=' font-semibold'>Max Supply</label> {coin.market_data.max_supply}</p>
                <p className='w-full flex items-center justify-between text-black text-lg my-4 '><label className=' font-semibold'>Circulating Supply</label> {coin.market_data.circulating_supply}</p>
                <p className='w-full flex items-center justify-between text-black text-lg my-4 '><label className=' font-semibold'>Market Cap</label> {currencySymbol}{coin.market_data.market_cap[currency]}</p>
                <p className='w-full flex items-center justify-between text-black text-lg my-4 '><label className=' font-semibold'>All Time Low</label> {currencySymbol}{coin.market_data.atl[currency]}</p>
                <p className='w-full flex items-center justify-between text-black text-lg my-4 '><label className=' font-semibold'>All Time High</label> {currencySymbol}{coin.market_data.ath[currency]}</p>
          
        </div>
    </div>
              </>
            }
               
    </>
  )
}

export default CoinDetails
