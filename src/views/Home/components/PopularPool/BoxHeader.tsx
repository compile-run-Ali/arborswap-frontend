import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled.div`
    width: 1200;
    margin: 20px auto;
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
const HeaderWrap = styled(Grid)`
    grid-template-columns: 50% 50%;
    padding: 0px 15px;
`
const TitleWrap = styled.div``
const TitleIcon = styled.span``
const Title = styled.h2`
    font-family: 'GilroyHome';
    padding-left: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
    display: inline-block;
`
const ViewLink = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
    text-align: right;
    padding-top: 10px;
`
const PoolLink = styled.a``

const BoxHeader = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <HeaderWrap>
            <TitleWrap>
                <TitleIcon><img src="images/home/imgnew/lock-green.png" alt="" /></TitleIcon>
                <Title>Staking</Title>
            </TitleWrap>
            <PoolLink as={Link} to={{pathname: '/pools' }} target="_blank"  >
                <ViewLink>{"View all >"} </ViewLink>
            </PoolLink>
        </HeaderWrap>
      </Wrapper>
    </>
  )
}

export default BoxHeader
