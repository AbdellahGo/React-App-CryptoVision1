import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '825251549emsh5420d025a3bd3e4p14796djsn2f8a79b9dd39',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'


export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({baseUrl, headers: cryptoNewsHeaders}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
    })
  })
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi
// /search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}