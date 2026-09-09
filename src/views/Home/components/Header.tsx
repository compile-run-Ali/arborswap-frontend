import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import '../assets/Home.css'
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
import { useTranslation } from 'contexts/Localization'
import FooterBg from '../assets/banner-bg.png'
import Logo from '../assets/logo.svg'
import Dividers from '../assets/dividers.png'
import ProtocolModal from './ProtocolModal'
import Navigation from './Navigation'
import BannerLinks from './Header/BannerLinks'

const Wrapper = styled(Flex)`
  font-family: GilroyHome;
  z-index: 1;
  position: relative;
  padding-top: 36px;
  min-height: 1350px;
  background: url(${FooterBg});
  background-size: cover;
  flex-direction: column;
  background-color: trasparent;
  background-position: center;
  margin-bottom: -130px;
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    display:inline;
    width: 750px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    background-image: none;
  }
`

const StatsWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 35px;
  margin: 480px auto 0 auto;
  background: rgba(68, 54, 20, 0.08);
  box-shadow: inset 11.9333px -11.9333px 11.9333px rgba(200, 156, 52, 0.08),
    inset -11.9333px 11.9333px 11.9333px rgba(200, 156, 52, 0.08);
  backdrop-filter: blur(6.5px);
`

const InnerStatsWrapper = styled(Flex)`
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 270px;
  background-image: url(${Dividers});
  background-size: cover;
  display: grid;
  grid-template-columns: 50% 50%;
  @media (min-width: 768px) and (max-width: 1024px) {
    background-image: none;
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    height: auto;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    background-image: none;
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    height: auto;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    background-image: none;
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    background-image: none;
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    height: auto;
  }
`
const StatsColumn = styled(Flex)`
  position: relative;
  width: 380px;
  flex-direction: row;
  border-bottom: none;
  width:100%;
  &:nth-child(4){
    border-bottom:none;
  };
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    border-bottom: 2px dotted #545454;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    border-bottom: 2px dotted #545454;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    border-bottom: 2px dotted #545454;
  }
`
const Box2 = styled(Box)`
  margin: auto;
  font-family: GilroyHome;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin: 10px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 10px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 10px;
  }
`
const BoxIcon = styled.img`
  float:left;
`

const Header = () => {
  const { t } = useTranslation()
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Navigation />
        </InnerWrapper>
        <BannerLinks />
        <StatsWrapper>
          <InnerStatsWrapper>
            <StatsColumn>
              <Box2 as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                <BoxIcon src='images/home/imgnew/activity.png' alt='' />
                <span style={{ 
                  fontFamily: 'GilroyHome', 
                  paddingTop: '15px', 
                  position: 'relative',
                  top: '24px',
                  paddingLeft: '10px' }} >Total Trading Volume</span>
              </Box2>
            </StatsColumn>
            <StatsColumn>
              <Box2 as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                <BoxIcon src='images/home/imgnew/icon-locked.png' alt='' />
                  <span style={{ 
                    fontFamily: 'GilroyHome', 
                    paddingTop: '15px', 
                    position: 'relative',
                    top: '24px',
                    paddingLeft: '10px' }} >Total Value Locked</span>
              </Box2>
            </StatsColumn>
            <StatsColumn>
              <Box2 as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                <BoxIcon src='images/home/imgnew/icon-projects.png' alt='' />
                <span style={{ 
                      fontFamily: 'GilroyHome', 
                      paddingTop: '15px', 
                      position: 'relative',
                      top: '16px',
                      lineHeight: '24px',
                      paddingLeft: '10px' }} > Total Projects Launched </span>
              </Box2>
            </StatsColumn>
            <StatsColumn>
              <Box2 as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                <BoxIcon src='images/home/imgnew/icon-ticket-star.png' alt='' />
                <span style={{ 
                        fontFamily: 'GilroyHome', 
                        paddingTop: '15px', 
                        position: 'relative',
                        top: '24px',
                        paddingLeft: '10px' }} > Total Tickets Won </span>
              </Box2>
            </StatsColumn>
          </InnerStatsWrapper>
          
        </StatsWrapper>
      </Wrapper>
    </>
  )
}

export default Header
