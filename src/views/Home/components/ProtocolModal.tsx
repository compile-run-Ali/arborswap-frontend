import React, {useState} from 'react';
import styled from 'styled-components';
import {
    Flex,
    Box,
  } from '@arborswap/uikit';

const InnerStatsWrapper = styled(Flex)`
  width: 500px;
  position: realtive;
  flex-wrap: wrap;
`
const StatsColumn = styled(Flex)`
  width: 250px;
  position: realtive;
`

const Pbtn = styled.button`
    font-family: GilroyHome;
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
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
    color: #FFFFFF;
    cursor: pointer;
    background: transparent;
    border:none;
`;
const PModalWraper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(59,59,59, 0.7);
    width: 100%;
`;
const PModal = styled.div`
    width: 500px;
    background: #FFFFFF;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999;
`;

const PModalHeader = styled.div`
    background: #FFFFFF;
    border-radius: 10px 10px 0px 0px;
    padding: 30px;
`;

const PModalTitle = styled.div`
    font-family: GilroyHome;
    width: 50%;
    display: inline-block;
    float:left;
    color: #464754;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.02em;
`;
const PModalClose = styled.div`
    font-family: GilroyHome;
    display: inline-block;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #464754;
    width: 42%;
    text-align: right;
    cursor: pointer;
`;
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
const PModalBody = styled.div`
  padding: 20px;
`;
const PModalCloseSpan = styled.span`
    position: relative;
    top: 6px;
`;

const ProtocolModal = ({fontColor})=>{
    
    const [showModal, setShowModal] = useState(false);
    const hideModal = ()=> setShowModal(false);
    const ModalArea = ()=>{
        return (
            <>
                <PModalWraper />
                <PModal>
                    <PModalHeader>
                        <PModalTitle>Choose Protocol</PModalTitle>
                        <PModalClose onClick={hideModal} >Close <PModalCloseSpan><img src="/images/home/imgnew/close-circle.png" alt="" /></PModalCloseSpan></PModalClose>
                    </PModalHeader>
                    <PModalBody>
                        <InnerStatsWrapper>
                            <StatsColumn>
                                <Box as="div" style={{ color: '#A69F9F', padding: '0px 40px 40px 40px' }}>
                                    <img src="/images/home/imgnew/staking.png" alt="" /> 
                                    <a href='https://airdrop.arborswap.org/'>
                                        <BoxItemName>Airdrop</BoxItemName>
                                    </a>
                                </Box>
                            </StatsColumn>
                            <StatsColumn>
                                <Box as="div" style={{ color: '#A69F9F', padding: '0px 40px 40px 40px' }}>
                                    <img src="/images/home/imgnew/bag-tick.png" alt="" /> 
                                    <a href='https://lock.arborswap.org/'>
                                        <BoxItemName>Locker</BoxItemName>
                                    </a>
                                </Box>
                            </StatsColumn>
                            <StatsColumn>
                                <Box as="div" style={{ color: '#A69F9F', padding: '0px 40px 40px 40px' }}>
                                    <img src="/images/home/imgnew/trade.png" alt="" /> 
                                    <a href='/swap'>
                                        <BoxItemName>Dex</BoxItemName>
                                    </a>
                                </Box>
                            </StatsColumn>
                            <StatsColumn>
                                <Box as="div" style={{ color: '#A69F9F', padding: '0px 40px 40px 40px' }}>
                                    <img src="/images/home/imgnew/lock.png" alt="" /> 
                                    <a href='/pools'>
                                        <BoxItemName>Staking</BoxItemName>
                                    </a>
                                </Box>
                            </StatsColumn>
                            
                        </InnerStatsWrapper>
                    </PModalBody>
                </PModal>
            </>
        );
    }

    
    return (
        <>
            <Pbtn style={{'color': fontColor}} onClick={()=>setShowModal(true)} >Protocols</Pbtn>
            {showModal && < ModalArea/> }
        </>
    );
}

export default ProtocolModal;