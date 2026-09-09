import React from 'react'
import styled from 'styled-components'
import { Flex, Link } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FooterContact from './Footer/FooterContact';
import SubscriptionForm from './Footer/SubscriptionForm'
import FooterBg from '../assets/footer-bg.png'
import LogoWhite from '../assets/logo-white.svg'

const WrapperUp = styled.div`
  background-image: url(${FooterBg});
  background-size: cover;
  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #F5F6F7;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    background-color: #F5F6F7;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #F5F6F7;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    background-color: #F5F6F7;
  }
`
const Wrapper = styled(Flex)`
  z-index: 0;
  position: relative;
  padding-top: 166px;
  padding-bottom: 20px;
  overflow: hidden;
  background: transparent;
  @media (min-width: 768px) and (max-width: 1024px) {

  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
      display:grid;
  }
  @media (min-width: 481px) and (max-width: 767px) {
      display:grid;
  }
  @media (min-width: 320px) and (max-width: 480px) {
      display:grid;
  }
`

const WrapperInner = styled(Flex)`
  font-family: GilroyHome;
  position: relative;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 1024px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    padding: 20px 40px;
    align-item:center;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    padding: 20px 40px;
    align-item:center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    padding: 20px 40px;
    align-item:center;
  }
`
const FirstColumn = styled(Flex)`
  position: relative;
  flex-direction: column;
`
const SecondColumn = styled(Flex)`
  position: relative;
  flex-direction: row;
  gap: 80px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin-top: 60px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 60px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 60px;
  }
`
const ProductColumn = styled(Flex)`
  position: relative;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  }
  @media (min-width: 481px) and (max-width: 767px) {

  }
  @media (min-width: 320px) and (max-width: 480px) {
    
  }
`
const SearchTxt = styled.div`
  font-family: GilroyHome;
  margin-top: 64px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #FAF3E8;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    text-align: center;
    font-size: 15px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    font-size: 15px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    text-align: center;
    font-size: 15px;
  }
`

const MenuTitle = styled.div`
  font-family: GilroyHome;
  margin-bottom: 26px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 120%;
  text-align: left;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    font-size: 20px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 20px;
  }
`
const LinkEx = styled(Link)`
  font-family: GilroyHome;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
`
const FooterLogo = styled.img`
  width: 260px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 220px;
    margin: auto;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 220px;
    margin: auto;
  }

`

const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <WrapperUp>
        <Wrapper>
          <WrapperInner>
            <FirstColumn>
              <FooterLogo src={LogoWhite} alt="white" />
              <SearchTxt>
                Want to join Arbor on this new Journey?
              </SearchTxt>
              <SubscriptionForm />
            </FirstColumn>
            <SecondColumn>
              <ProductColumn>
                  <MenuTitle>Products</MenuTitle>
                  <LinkEx href="/swap" >Exchange</LinkEx>
                  <LinkEx href="/pools" target='_blank' >Staking</LinkEx>
                  <LinkEx href="https://protocol.arborswap.org/airdropper/airdrops" target='_blank' >Airdrop</LinkEx>
                  <LinkEx href="https://protocol.arborswap.org/locked-assets" target='_blank' >Lock</LinkEx>
              </ProductColumn>
              <ProductColumn>
                  <MenuTitle>Resources</MenuTitle>
                  <LinkEx href="https://arborswap.gitbook.io/product-docs/introducing/arborswap" target='_blank' >Docs</LinkEx>
                  <LinkEx href="https://arborswap.gitbook.io/product-docs/arborswap-dex/exchange-a-token" target='_blank' >User Guides</LinkEx>
                  <LinkEx href="/roadmap" >Roadmap</LinkEx>
                  <LinkEx href="/applylisting" >Apply Listing</LinkEx>
              </ProductColumn>
            </SecondColumn>
          </WrapperInner>
        </Wrapper>  
        <FooterContact /> {/* Footer Contact Component */} 
      </WrapperUp>
    </>
  )
}

export default Footer
