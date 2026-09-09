/* Partners */
import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem } from '@arborswap/uikit'
import '../assets/Partners.css';
import partnerBg from '../assets/partners-bg.png'

const PartnersW = styled.div`
    background-image: url(${partnerBg});  
    background-size: cover;
    padding: 80px 0px;
    @media (min-width: 768px) and (max-width: 1024px) {
        box-shadow: none;
        background: #fff;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        box-shadow: none;
        background: #fff;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        box-shadow: none;
        background: #fff;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        box-shadow: none;
        background: #fff;
    }
`
const PartnersInner = styled.div`
`
const PartnersTitle = styled.div`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
    text-align:center;
    margin-bottom: 60px;
`
const PartnersList = styled.div`
    margin: 20px;
`

const Partners = () => {
    return (
      <PartnersW>
        <PartnersInner>
            <PartnersTitle>Partners</PartnersTitle>
            <PartnersList>
                <div className="partners">
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/bsc.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/esumen.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/etherssc.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/bscscann.png" alt="" />
                    </div>
                    {/* <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Ten-Traced.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Defistation-2.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/Beefy.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/BSCNews.png" alt="" />
                    </div>
                    <div className="partner-item text-center">
                        <img src="/images/home/imgnew/partners/CoinGecko.png" alt="" />
                    </div> */}
                </div> 
            </PartnersList>
        </PartnersInner>
      </PartnersW>
    );
  };
  
  export default Partners;