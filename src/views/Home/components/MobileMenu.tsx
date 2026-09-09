import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import {
    Flex,
    Box,
} from '@arborswap/uikit';

import Logo from '../assets/logo.svg'

const Pbtn = styled.button`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 13px 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer font-family:'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    -webkit-letter-spacing: 0.02em;
    -moz-letter-spacing: 0.02em;
    -ms-letter-spacing: 0.02em;
    letter-spacing: 0.02em;
    background: #FFFFFF;
    cursor: pointer;
    border:none;
    border-radius: 10px;
    z-index: 99999999;
    display:none;
    @media (min-width: 768px) and (max-width: 1024px) {
        display:none;
        margin-right: 20px;
        padding: 8px 11px;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        display:block;
        padding: 8px 11px;
        position: relative;
        right: 20px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        display:block;
        padding: 8px 11px;
        position: relative;
        right: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        display:block;
        padding: 8px 11px;
        position: relative;
        right: 20px;
    }
`;
const CrossWrap = styled.button`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 13px 15px;
    -webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer font-family:'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    text-align: center;
    -webkit-letter-spacing: 0.02em;
    -moz-letter-spacing: 0.02em;
    -ms-letter-spacing: 0.02em;
    letter-spacing: 0.02em;
    background: #FFFFFF;
    cursor: pointer;
    border:none;
    border-radius: 10px;
    z-index: 99999999;
    display:none;
    @media (min-width: 768px) and (max-width: 1024px) {
        display:none;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        display:block;
        position:  fixed;
        right: 30px;
        top: 30px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        display:block;
        position:  fixed;
        right: 30px;
        top: 30px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        display:block;
        position:  fixed;
        right: 30px;
        top: 30px;
    }
`;

const MMenu = styled.div`
    width: 100%;
    background: #F5F6F7;
    border-radius: 0px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999999;
    padding-top: 100px;
`;

const MMenuBody = styled.div`
  padding: 20px;
`;
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

  }
  
  @media (min-width: 481px) and (max-width: 767px) {

  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    
  }
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: none;
  display: block;
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
  color: #000000;
`;

const DropDownContent = styled.div`
  display: none;
  position: relative;
  background: #FFFFFF;
  border: 3px solid rgba(255, 229, 176, 0.2);
  box-shadow: 10px 10px 20px rgba(166, 159, 159, 0.3);
  border-radius: 10px;
  padding:20px;
`;

const DropDownLi = styled(StyledLi)`
  display: block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  cursor: pointer;
`;

const SubA = styled.a`
  display: block;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 0px;
  color: #000000;
`;
const Arrowd = styled.div`
  padding: 5px;
  display:inline;
`;
const Dptxt = styled.div`
display:inline;
`;
const InnerStatsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`
const StatsColumn = styled(Flex)`
  position: realtive;
`

const BoxItemName = styled.span`
    font-family: GilroyHome;
    display: inline-block;
    position: relative;
    top: -7px;
    left: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
`;
const Logos2 = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  display: inline-block;
  font-size: 22px;
  margin-top: 10px;
  margin-left: 20px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0px 10px;
    z-index: 99999999;
  }
  
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    margin: 0px 10px;
    width: 150px;
    z-index: 99999999;
    position: fixed;
    left: 20px;
  }
  
  @media (min-width: 481px) and (max-width: 767px) {
    margin: 0px 10px;
    width: 150px;
    z-index: 99999999;
    position: fixed;
    left: 20px;
  }
  
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0px 10px;
    width: 150px;
    z-index: 99999999;
    position: fixed;
    left: 20px;
  }
`

const MobileMenu = ({fontColor})=>{
    
    const [showMemu, setShowMemu] = useState(false);
    const hideModal = ()=> setShowMemu(false);
    const ModalArea = ()=>{
        return (
            <>
                <MMenu>
                    <MMenuBody>
                    <MenuWrapper>
                        <StyledUl>
                        <DropDownLi>
                            <Dropbtn>
                                <Dptxt>Protocols</Dptxt> 
                                <Arrowd><img src='/images/home/imgnew/arrowd-black.png' alt='' /></Arrowd>
                            </Dropbtn>
                            <DropDownContent>
                                {" "}
                                <InnerStatsWrapper>
                                        <StatsColumn>
                                            <Box as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                                                <img src="/images/home/imgnew/staking.png" alt="" /> 
                                                <a href='https://protocol.arborswap.org/airdropper/airdrops'>
                                                    <BoxItemName>Airdrop</BoxItemName>
                                                </a>
                                            </Box>
                                        </StatsColumn>
                                        <StatsColumn>
                                            <Box as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                                                <img src="/images/home/imgnew/bag-tick.png" alt="" /> 
                                                <a href='https://protocol.arborswap.org/locked-assets'>
                                                    <BoxItemName>Locker</BoxItemName>
                                                </a>
                                            </Box>
                                        </StatsColumn>
                                        <StatsColumn>
                                            <Box as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                                                <img src="/images/home/imgnew/trade.png" alt="" /> 
                                                <a href='/swap'>
                                                    <BoxItemName>Dex</BoxItemName>
                                                </a>
                                            </Box>
                                        </StatsColumn>
                                        <StatsColumn>
                                            <Box as="div" style={{ color: '#A69F9F', padding: '10px' }}>
                                                <img src="/images/home/imgnew/lock.png" alt="" /> 
                                                <a href='/pools'>
                                                    <BoxItemName>Staking</BoxItemName>
                                                </a>
                                            </Box>
                                        </StatsColumn>
                                        
                                    </InnerStatsWrapper>
                            </DropDownContent>
                        </DropDownLi>
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
                                <SubA>
                                    <Link to='/roadmap' >Roadmap</Link>
                                </SubA>
                                <SubA>
                                    <Link to='/applylisting' >Apply for listing</Link>
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
                                <SubA>
                                    <a href='https://twitter.com/arborswap_defi' >Twitter</a>
                                </SubA>
                                <SubA>
                                    <a href='https://t.me/arborswap' >Telegram</a>
                                </SubA>
                                <SubA>
                                    <a href='https://www.instagram.com/arborswapofficial' >Instagram</a>
                                </SubA>
                            </DropDownContent>
                        </DropDownLi>
                        </StyledUl>
                        </MenuWrapper>
                    </MMenuBody>
                </MMenu>
            </>
        );
    }

    
    return (
        <>
        { showMemu ? 
            <>
            <Logos2 href="/">
                <img src={Logo} alt="logo" />
            </Logos2>
            <CrossWrap onClick={()=>setShowMemu(false)} >
                <img src="images/home/imgnew/cross.png" alt="" />
            </CrossWrap>
            </>
        : <Pbtn style={{'color': fontColor}} onClick={()=>setShowMemu(true)} >
                <img src="images/home/imgnew/menu.png" alt="" />
            </Pbtn>}
            

            {showMemu && < ModalArea/> } 
 
        </>
    );
}

export default React.memo(MobileMenu);