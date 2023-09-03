import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": "825251549emsh5420d025a3bd3e4p14796djsn2f8a79b9dd39",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const baseUrl = 'https://coinranking1.p.rapidapi.com'


export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl, headers: cryptoHeaders}),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count = 100) => `/coins?limit=${count}`
    }),
    getCryptoDetails: builder.query({
      query: (id) => `/coin/${id}`
    }),
    getCryptoHistory: builder.query({
      query: ({id, timePeriod}) => `/coin/${id}/history?timePeriod=${timePeriod}`
    })
  })
})
export const {useGetCryptoQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi