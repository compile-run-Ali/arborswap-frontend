import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import NftCard from './TrendingNft/NftCard'

const Wrapper = styled(Flex)`
  z-index: 0;
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 500px;
  background: trasparent;
`
const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
`
const NftWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
  margin-top: 60px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
const NftItems = styled(Grid)`
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: 30% 30% 30%;
  align-item: center;
  gap: 10px 40px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
    grid-template-columns: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    grid-template-columns: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    grid-template-columns: 100%;
  }
`
const ViewAll = styled.a`
  width: 276px;
  display: block;
  margin: 20px auto;
  background: #00783F;
  border-radius: 6px;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-align:center;
  padding: 18px 0px;
`

const TrendingNft = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Heading textAlign="center" scale="lg" style={{ fontFamily : 'GilroyHome', fontSize: '40px' }} >
            Trending NFTs
          </Heading>
          <NftWrap>
            <NftItems>
              <NftCard img="images/home/imgnew/nfts/image1.png" />
              <NftCard img="images/home/imgnew/nfts/image2.png" />
              <NftCard img="images/home/imgnew/nfts/image3.png" />
              <NftCard img="images/home/imgnew/nfts/image4.png" />
              <NftCard img="images/home/imgnew/nfts/image5.png" />
              <NftCard img="images/home/imgnew/nfts/image6.png" />
            </NftItems>
            <ViewAll>View All</ViewAll>
          </NftWrap>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default TrendingNft
