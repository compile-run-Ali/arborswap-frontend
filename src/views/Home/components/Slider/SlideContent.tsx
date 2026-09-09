import React from 'react'
import styled from 'styled-components'

import {
  Flex,
  Heading,
  Text,
  LinkExternal,
  Button,
  DashboardIcon,
  SubMenu,
  SubMenuItem,
  Grid,
  useWalletModal,
  Box,
} from '@arborswap/uikit'

const SlidWrap = styled(Flex)`
  gap: 20px;
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`
const SlidWrapMobile = styled(Flex)`
  gap: 20px;
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: flex;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`
const Slide = styled.div`
  padding-right: 10px;
`
const SlideImage = styled.img`
  border-radius: 10px;
`
const MobileSlid = styled.div`

`

export default function SlideContent({ img1='', img2='', img3='', mobile='' }) {

  return (
    <>
      <SlidWrapMobile>
        <MobileSlid className="w-full px-2">
          <SlideImage src={img1} alt="banner-1" />
        </MobileSlid>
      </SlidWrapMobile>
      
      <SlidWrap>
        <Slide>
          <SlideImage src={img1} alt="banner-1" />
        </Slide>

        <Slide>
          <SlideImage  src={img2} alt="banner-2" />
        </Slide>

        <Slide>
          <SlideImage src={img3} alt="banner-3" />
        </Slide>
      </SlidWrap>

    </>
  )
}
