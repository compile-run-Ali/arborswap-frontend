import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import BoxHeader from './PopularPool/BoxHeader'
import PoolsHome from './PopularPool/PoolsHome'

const Wrapper = styled(Flex)`
  z-index: 0;
  position: relative;
  padding-top: 36px;
  min-height: 500px;
  background: trasparent;
  padding-top: 180px;
  padding-bottom: 80px;
`
const InnerWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  justify-content: center;
`
const PoolWrap = styled.div`
`
const HeadingEx = styled(Heading)`
  padding-bottom: 60px;
`

const PopularPool = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <HeadingEx textAlign="center" scale="lg" style={{ fontFamily : 'GilroyHome', fontSize: '40px' }} >
            Popular Pools
          </HeadingEx>
          <PoolWrap>
            <BoxHeader />
            <PoolsHome />
          </PoolWrap>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default PopularPool
