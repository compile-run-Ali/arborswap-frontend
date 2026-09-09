import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import PartnersBg from './assets/trending-bg.png'

import Header from './components/Header'
import Footer from './components/Footer'
import PopularPool from './components/PopularPool'
import Partners from './components/Partners'
import TrendingNft from './components/TrendingNft'
import FeaturedIdo from './components/FeaturedIdo'


const PopularTrending = styled.div`
  background-image: url(${PartnersBg});
  background-size: cover;
  background-color: #F5F6F7;
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  return (
    <>
      <Header />
      <PopularTrending>
        <PopularPool />
        {/* <TrendingNft /> */}
      </PopularTrending>
      <FeaturedIdo />
      <Partners />
      {/* <FeaturedIdo /> */}
      <Footer />
    </>
  )
}

export default Home
