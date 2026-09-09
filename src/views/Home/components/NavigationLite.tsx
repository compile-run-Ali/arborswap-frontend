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
import FooterBg from '../assets/header-bg.png'
import Logo from '../assets/logo.svg'
import Dividers from '../assets/dividers.png'
import ProtocolModal from './ProtocolModal'
import MobileMenu from './MobileMenu'

const MenuWrapper = styled(Flex)`
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  display:block;
  @media (min-width: 768px) and (max-width: 1024px) {
    display:block;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display:none;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    display:none;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    display:none;
  }
`

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: transparent;
  padding-left: 16px;
  padding-right: 16px;
  color: #fff;
`

const Logos = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0px 10px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display: block;
    margin: 0px 10px;
    width: 150px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display: block;
    margin: 0px 10px;
    width: 150px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    margin: 0px 10px;
    width: 150px;
  }
`
const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background: #FFFFFF;
  border: 3px solid rgba(255, 229, 176, 0.2);
  box-shadow: 10px 10px 20px rgba(166, 159, 159, 0.3);
  border-radius: 10px;
  padding:20px;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  font-family: GilroyHome;
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #464754;
  cursor: pointer;
`;
const SubA = styled.a`
  font-family: GilroyHome;
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #464754;
  padding: 12px 0px;
`;
const Arrowd = styled.div`
  padding: 5px;
  display:inline;
`;
const Dptxt = styled.div`
  font-family: GilroyHome;
  display:inline;
  color: #464754;
`;
const LunchApp = styled.div`
  display:inline;
  @media (min-width: 768px) and (max-width: 1024px) {
    display:inline;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    display:none;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    display:none;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display:none;
  }
`;

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <>
      <StyledNav>
        <Logos href="/">
            <img src={Logo} alt="logo" />
        </Logos>
        <MenuWrapper>
        <StyledUl>
        <StyledLi>
            <ProtocolModal fontColor="#464754" />
        </StyledLi>
        <StyledLi>
            <StyledA as={Link} to={{pathname: 'https://roburna.com' }} target="_blank" >
              RBA Token
            </StyledA>
        </StyledLi>
        <DropDownLi>
            <Dropbtn>
            <Dptxt>Resources</Dptxt> 
            <Arrowd><img src='/images/home/imgnew/arrowd-black.png' alt='' /></Arrowd>
            </Dropbtn>
            <DropDownContent>
            {" "}
            <SubA as={Link} to={{pathname: 'https://arborswap.gitbook.io/product-docs/' }} target="_blank" >
              Docs & User Guides
            </SubA>
            <SubA as={Link} to='/roadmap' >
                Roadmap
            </SubA>
            <SubA as={Link} to='/applylisting' >
                Apply for listing
            </SubA>
            </DropDownContent>
        </DropDownLi>
        <DropDownLi>
            <Dropbtn>
            <Dptxt>Socials</Dptxt> 
            <Arrowd><img src='/images/home/imgnew/arrowd-black.png' alt='' /></Arrowd>
            </Dropbtn>
            <DropDownContent>
            {" "}
            <SubA as={Link} to={{pathname: 'https://twitter.com/arborswap_defi'}} target="_blank" >
                Twitter
            </SubA>
            <SubA as={Link} to={{pathname: 'https://t.me/arborswap' }} target="_blank" >
                Telegram
            </SubA>
            <SubA as={Link} to={{pathname: 'https://www.instagram.com/arborswapofficial' }} target="_blank" >
                Instagram
            </SubA>
            </DropDownContent>
        </DropDownLi>
        </StyledUl>
        </MenuWrapper>
        <LunchApp> 
          <Button as={Link} to="/swap" startIcon={<DashboardIcon color="#FFFFFF" />} style={{fontFamily: 'GilroyHome'}} >
              Launch APP
          </Button>  
        </LunchApp>
        <MobileMenu fontColor="#ffffff" />
        </StyledNav>
    </>
  )
}

export default Navigation
