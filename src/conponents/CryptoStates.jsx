import React from "react";
import { useGetCryptoQuery } from "../redux/services/cryptoApi";
import millify from "millify";

const CryptoStates = ({stats}) => {
  return (
    <div className="crypto-states px-2">
      <h2>Global Crypto Stats</h2>
      <ul className="list-unstyled d-flex flex-wrap flex-column flex-sm-row row-gap-3 mt-4">
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total Cryptocurrencies:</span>
          <span className="fs-4 fw-medium">{millify(stats?.total)}</span>
        </li>
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total Cryptocurrencies:</span>
          <span className="fs-4 fw-medium">{millify(stats?.totalCoins)}</span>
        </li>
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total Market Cap:</span>
          <span className="fs-4 fw-medium">${millify(stats?.totalMarketCap)}</span>
        </li>
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total Exchanges:</span>
          <span className="fs-4 fw-medium">{millify(stats?.totalExchanges)}</span>
        </li>
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total 24h Volume:</span>
          <span className="fs-4 fw-medium">${millify(stats?.total24hVolume)}</span>
        </li>
        <li className="d-flex flex-column w-50 row-gap-3">
          <span className="text-black-50 fs-5">Total Markets:</span>
          <span className="fs-4 fw-medium">{millify(stats?.totalMarkets)}</span>
        </li>
      </ul>
    </div>
  );
};

export default CryptoStates;
