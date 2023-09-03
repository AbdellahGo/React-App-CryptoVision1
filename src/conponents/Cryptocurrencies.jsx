import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptoQuery } from "../redux/services/cryptoApi";
import millify from "millify";
import Loader from "./Loader";

const Cryptocurrencies = ({ countChecker }) => {
  const count = countChecker ? 10 : 100
  const { data, isFetching } = useGetCryptoQuery(count)
  const [coinsList, setCoinsList] = useState([]);
  const [coinSearch, setCoinSearch] = useState('')
  useEffect(() => {
    const cryptoFilter = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(coinSearch.toLowerCase()))
    setCoinsList(cryptoFilter)
  }, [coinSearch, data])
  if (isFetching) return <Loader/>
  return (
    <div className="cryptocurrencies crypto mt-3" style={{ zIndex: '1' }}>
      {/* header */}
      {
        countChecker && <div className="d-flex px-2 align-items-center justify-content-between">
          <h2>Top 10 Cryptos In The World</h2>
          <Link
            to="cryptocurrencies"
            className="text-primary text-decoration-none fs-4 fw-medium"
          >
            Show more
          </Link>
        </div>
      }
      {/* input */}
      {!countChecker && <div className="px-2 py-3">
        <input type="text" className="px-2 py-2 form-control" 
        placeholder="Search For Crypto Coin" 
        style={{maxWidth: '300px' }} 
        onChange={(e)=>{setCoinSearch(e.target.value)}}/>
      </div>
      }
      {/* cryptos */}
      <div className="row mx-0 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-3 mt-2">
        {coinsList?.map((coin) => (
          <div className="px-2" key={coin.uuid}>
            <Link to={`/cryptocoin/${coin.uuid}`} className="text-decoration-none">
              <div class="card">
                <div className="d-flex align-items-center justify-content-between px-3 py-2">
                  <h5>{coin.rank}. {coin.name}</h5>
                  <div className="image-parent d-flex align-items-center">
                    <img src={coin.iconUrl} className="w-100" />
                  </div>
                </div>
                <ul class="border-top d-flex flex-column px-3 py-2 text-black-50 row-gap-3 fs-6">
                  <li class="list-group-item">Price: {millify(coin.price)}</li>
                  <li class="list-group-item">Market Cap: {millify(coin.marketCap)}</li>
                  <li class="list-group-item">Daily Change: {coin.change}%</li>
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
