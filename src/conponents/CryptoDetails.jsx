import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../redux/services/cryptoApi'
import millify from 'millify'
import LineChart from './LineChart'
import Loader from './Loader'

const CryptoDetails = () => {
  const { id } = useParams()
  const [timePeriod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailsQuery(id)
  const { data: coinHistory } = useGetCryptoHistoryQuery({ id, timePeriod })
  const cryptoDetails = data?.data?.coin
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const stats = [
    { title: 'Price to USD', value: millify(cryptoDetails?.price), iconClass: 'fa-solid fa-circle-dollar-to-slot' },
    { title: 'Rank', value: cryptoDetails?.rank, iconClass: 'fa-solid fa-ranking-star' },
    { title: '24h Volume', value: millify(cryptoDetails?.['24hVolume']), iconClass: 'fa-solid fa-bolt-lightning' },
    { title: 'Market Cap', value: millify(cryptoDetails?.marketCap), iconClass: 'fa-solid fa-circle-dollar-to-slot' },
    { title: 'All-time-high(daily avg)', value: millify(cryptoDetails?.allTimeHigh.price), iconClass: 'fa-solid fa-trophy' }
  ]

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, iconClass: 'fa-solid fa-arrow-trend-up' },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, iconClass: 'fa-solid fa-coins' },
    { title: 'Approved Supply', value: cryptoDetails?.supply.confirmed ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>, iconClass: 'fa-solid fa-circle-exclamation' },
    { title: 'Total Supply', value: `$${millify(cryptoDetails?.supply.total)}`, iconClass: 'fa-solid fa-circle-exclamation' },
    { title: 'Circulating Supply', value: `$${millify(cryptoDetails?.supply.circulating)}`, iconClass: 'fa-solid fa-circle-exclamation' }
  ]

  if (isFetching) return <Loader/>
  return (
    <div className='crypto-details p-2'>
      <div className='header w-100 text-center pb-3'>
        <h2 className='text-primary fw-bolder'>{`${cryptoDetails.name} (${cryptoDetails.symbol}) Price`}</h2>
        <p className='text-black-50 fw-medium mt-3'>{cryptoDetails?.name} live price in Us dollars.
          View value statistics, market cap and supply.</p>
      </div>
      {/*  */}
      <div className='chart pt-4' style={{ borderTop: '2px solid #bbb' }}>
        <select className='form-select' style={{width: '140px'}} defaultValue='7d' onChange={(e) => setTimePeriod(e.target.value)}>
          {time.map((time, i) => (
            <option key={i}>{time}</option>
          ))}
        </select>
        <LineChart coinHistory={coinHistory} coinPrice={cryptoDetails.price} coinName={cryptoDetails.name}/>
      </div>
      {/*  */}
      <div className='row row-cols-lg-2 row-cols-1 row-gap-5 mt-5'>
        {/*  */}
        <div className='pe-lg-5'>
          <div>
            <div>
              <h3 className='text-primary'>{cryptoDetails.name} Value Statistics</h3>
              <p className='text-black-50 fw-medium' style={{ height: '40px' }}>An overview showing the stats of {cryptoDetails?.name}.</p>
            </div>
            <ul className='list-unstyled list-group'>
              {stats.map((stat, i) => (
                <li className='d-flex justify-content-between fs-5 py-3 border-bottom' key={i}>
                  <span><i class={stat.iconClass} style={{ width: '30px' }}></i> {stat.title}</span>
                  <span className='fw-bolder'>${stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
        <div className='ps-lg-5'>
          <div>
            <div>
              <h3 className='text-primary' >Other Stats Info</h3>
              <p className='text-black-50 fw-medium' style={{ height: '40px' }}>An overview showing the stats of all cryptocurrencies.</p>
            </div>
            <ul className='list-unstyled list-group'>
              {genericStats.map((stat, i) => (
                <li className='d-flex justify-content-between fs-5 py-3 border-bottom' key={i}>
                  <span><i class={stat.iconClass} style={{ width: '30px' }}></i>{stat.title}</span>
                  <span className='fw-bolder'>{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
        <div className='pe-lg-5'>
          <div className=''>
            <h3 className='text-primary' >What is {cryptoDetails.name}</h3>
            <p className='mt-lg-4 mt-0'>{cryptoDetails.description}</p>
          </div>
        </div>
        {/*  */}
        <div className='ps-lg-5'>
          <div className=''>
            <h3 className='text-primary' >{cryptoDetails.name} Links</h3>
            <ul className='list-unstyled list-group'>
              {cryptoDetails.links.map((link, i) => (
                <li className='d-flex justify-content-between fs-5 py-3 border-bottom' key={i}>
                  <span className='fw-bolder'>{link.type}</span>
                  <a className='fw-bolder text-primary text-decoration-none' href={link.url} target='_blank'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetails