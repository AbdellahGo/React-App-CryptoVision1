import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetCryptoNewsQuery } from '../redux/services/cryptoNewsApi'
import moment, { max } from 'moment/moment'
import { useGetCryptoQuery } from '../redux/services/cryptoApi';
import Loader from './Loader';




const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const CryptoNews = ({ countChecker }) => {
  const count = countChecker ? 8 : 20
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const [newsList, setNewsList] = useState([])
  const { data, isFetching } = useGetCryptoNewsQuery({ newsCategory, count })
  const {data: cryptoList} = useGetCryptoQuery()
  const categorys = []

  for (let i = 0; i < cryptoList?.data?.coins.length; i++) {
    categorys.push(cryptoList.data.coins[i].name)
  }
  useEffect(() => {
    setNewsList(data?.value)
  }, [newsCategory, data])
  return (
    <div className='crypto-news crypto mt-3'>
      {/* header */}
      {countChecker && <div className="d-flex px-2 align-items-center justify-content-between">
        <h2>Last Crypto News</h2>
        <Link
          to="cryptonews"
          className="text-primary text-decoration-none fs-4 fw-medium">
          Show more
        </Link>
      </div>}
      {/* select */}
      {
        !countChecker && <div className="px-2 py-3">
        <select class="form-select" style={{ maxWidth: '300px' }} onChange={(e) => setNewsCategory(e.target.value)}>
          <option value='Cryptocurrency'>Cryptocurrency</option>
          {categorys.map((value, i) => (
            <option value={`${value}`} key={i}>{value}</option>
          )
          )}
        </select>
      </div>
      }
      {/* news */}
      <div className="row mx-0 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-3 mt-2">
        {isFetching ? <Loader/> : (
          data?.value.length ? (
            newsList?.map((news, i) => (
              <div className="px-2" key={i}>
                <a href={news.url} className="text-decoration-none" target='_blank'>
                  <div class="card">
                    <div className="title d-flex align-items-center justify-content-between px-3 py-2">
                      <h5 className='w-75'>{news.name.length > 40 ? `${news.name.substring(0, 40)}...` : news.name}</h5>
                      <div className="image-news d-flex align-items-center">
                        <img src={news.image?.thumbnail.contentUrl || demoImage} className="w-100" />
                      </div>
                    </div>
                    <div class="card-body description">
                      <p class="card-text">{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                    </div>
                    <div class="card-body provider d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="other d-flex align-items-center gap-1">
                        <img src={news.provider[0].image?.thumbnail.contentUrl || demoImage} />
                        <span>{news.provider[0].name}</span>
                      </div>
                      <span className='time'>{moment(news.datePublished).startOf("ss").fromNow()}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : <p className='fs-5 w-100'>Sorry, we did not find any news related to this cryptocurrency </p>)
        }
      </div>
    </div>
  )
}

export default CryptoNews