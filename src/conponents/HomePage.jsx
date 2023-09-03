import React from 'react'
import CryptoStates from './CryptoStates'
import Cryptocurrencies from './Cryptocurrencies'
import { useGetCryptoQuery } from '../redux/services/cryptoApi'
import CryptoNews from './CryptoNews'
import Loader from './Loader'

const HomePage = () => {
  const { data, isFetching } = useGetCryptoQuery(10)
  const globalStats = data?.data?.stats
  if (isFetching) return <Loader/>
  return (
    <div>
      <CryptoStates stats={globalStats}/>
      <Cryptocurrencies countChecker/>
      <CryptoNews countChecker/>
    </div>
  )
}

export default HomePage