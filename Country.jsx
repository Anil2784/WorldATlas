import React, { useState } from 'react'
import { useEffect, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import CountryCard from './CountryCard';
import CountrySearch from "./countrySearch";
function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([])



  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data)


      console.log(res)
    })
  }, [])
  if (isPending) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <CountrySearch/>
      <section>
        <ul className='grid grid-cols-4 gap-0'>{
          
          countries.map((curCountry,index) => {
            return <CountryCard country={curCountry} key={index} />
          })
        }

        </ul>
      </section>
    </>
  )
}

export default Country