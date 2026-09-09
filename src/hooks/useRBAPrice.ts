import { useEffect, useState } from 'react'

/* eslint-disable camelcase */
export interface PriceApiResponse {
  rbaPriceBnb: number
  rbaPriceUsd: number
  bnbPrice: number
}

export const useRBAPrice = () => {
  const [data, setData] = useState<PriceApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://arbor-api.edscomp.com/price')
        const responseData: PriceApiResponse = await response.json()

        setData(responseData)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
