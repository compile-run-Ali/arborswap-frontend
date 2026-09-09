import React from "react";
import styled from 'styled-components'

import {
    Flex
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

const BuyNow = styled.div`
    opacity: 0;
    position: absolute;
    bottom: 40px;
    text-align: center;
    width: 100%;
    @media (min-width: 768px) and (max-width: 1024px) {
        opacity: 1;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        opacity: 1;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        opacity: 1;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        opacity: 1;
    }
`
const BuyNowA = styled.a`
    font-family: 'GilroyHome';
    background: #00783F;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const Card = styled.div`
    width: 100%;
    &:hover ${BuyNow} {
        opacity: 1;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0px 15px;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        padding: 0px 15px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        padding: 0px 15px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 0px 15px;
    }
`
const CardInner = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const CardHeader = styled.div`
    background-size: cover;
    width: 100%;
    min-height: 360px;
    position: relative;
    z-index: 9999;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const NoCopy = styled.div`
    position: relative;
    display: inline-block;
    background: rgb(70 71 84 /0.5);
    padding: 6px 10px;
    border-radius: 12px;
    color: #F5F1EB;
    box-shadow: inset 3.63333px -3.63333px 3.63333px rgba(165, 165, 165, 0.1), inset -3.63333px 3.63333px 3.63333px rgba(255, 255, 255, 0.1);
    top: 20px;
    left: 16px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const NoCopyImg = styled.span`
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const NoCopyTxt = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #F5F1EB;
    padding-left: 10px;

    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const CardFooter = styled.div`
    position: relative;
    width: 100%;
    background-color: #fff;
    border: 2px solid #C89C34;
    border-radius: 0px 0px 20px 20px;
    top: -50px;
    z-index: 1;
    padding-top: 70px;
    padding-left: 15px;
    margin-right: 0px;
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    padding-bottom: 20px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterLeft = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterRight = styled.div`
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterTitle = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #464754;

    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterSubTitle = styled.div`
    padding-top: 8px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterSubTitleImg = styled.div`
    display: inline-block;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const FooterSubTitleTxt = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #A69F9F;
    display: inline-block;
    padding-left: 6px;

    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const PriceTitle = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #A69F9F;

    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const PriceTag = styled.div`
    padding-top: 8px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const PriceTagImg = styled.img`
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const PriceTagSpan = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    text-align: right;
    color: #464754;
    padding-left: 6px;

    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`

const NftCard = ( props )=>{
    const { t } = useTranslation();
    return (
        <>
            <Card>
                <CardInner>
                    <CardHeader style={{
                        backgroundImage: `url(${props.img})`
                    }} >
                        <NoCopy>
                            <NoCopyImg>
                                <img src="images/home/imgnew/nfts/note.png" alt="" />
                            </NoCopyImg>
                            <NoCopyTxt>1 of 300</NoCopyTxt>
                        </NoCopy>
                        <BuyNow>
                            <BuyNowA href="/" >Buy now</BuyNowA>
                        </BuyNow>
                    </CardHeader>
                    <CardFooter>
                        <FooterLeft>
                            <FooterTitle>ArbowMan #475</FooterTitle>
                            <FooterSubTitle>
                                <FooterSubTitleImg>
                                    <img src="images/home/imgnew/nfts/VerifiedTag.png" alt="" style={{
                                            width: '16px',
                                            position: 'relative',
                                            top: '4px'
                                    }} />
                                </FooterSubTitleImg>
                                <FooterSubTitleTxt>
                                    ArborSwap NFTs
                                </FooterSubTitleTxt>
                            </FooterSubTitle>
                        </FooterLeft>
                        <FooterRight>
                            <PriceTitle>
                                Listed Price
                            </PriceTitle>
                            <PriceTag>
                                <PriceTagImg src="images/home/imgnew/nfts/RIP.png" alt="" style={{
                                            width: '25px',
                                            position: 'relative',
                                            top: '6px'
                                    }} />
                                <PriceTagSpan>8000</PriceTagSpan>
                            </PriceTag>
                        </FooterRight>
                    </CardFooter>
                </CardInner>
            </Card>
        </>
    );
}

export default NftCard;
