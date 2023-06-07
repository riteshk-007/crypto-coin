import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import { server } from '..'
import {  L40 } from 'react-isloading'
import ExchangeCard from './ExchangeCard'
import Error from './Error'



function Exchanges() {
  const [exchanges, setExchanges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

      useEffect(()=>{
          const fetchExchages = async ()=>{
          try {
              const {data} = await axios.get(`${server}/exchanges`)
              setExchanges(data)
              setLoading(false)
          } catch (error) {
            setError(true)
            setLoading(false)
          }
          }
          fetchExchages()
      },[])

      if(error) return <Error msg="Error While Fetching Exchanges : ("/>

  return (
    <>
    <div className="container m-auto flex items-center justify-evenly flex-wrap my-3">
          {
            loading ? <L40
            style={{
              height: "13rem", width: "15rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", }}  />
               : <>
               {
                exchanges.map((item)=>{
                  return(
                      <ExchangeCard 
                      key={item.id}
                      name={item.name}
                      img={item.image}
                      rank={item.trust_score_rank}
                      url={item.url}/>
                  
                  )
                })
               }
                     </>
          }
    </div>
    </>
  )
}

export default Exchanges
