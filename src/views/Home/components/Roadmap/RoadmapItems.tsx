import React from "react";
import styled from 'styled-components'

import {
  Flex
} from '@arborswap/uikit'

import { useTranslation } from 'contexts/Localization'
import './roadmapItems.css';

const ListingHeader = styled.div`
    width: 900px;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 768px) and (max-width: 1024px) {
        width:100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width:100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width:100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width:100%;
    }
`
const ListingTitle = styled.h1`
    font-family: GilroyHome;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #464754;
    padding-top:100px;
    padding-bottom: 5px;
`
const FormWrapper = styled.div`
    width: 800px;
    margin: 0 auto;
    background: tranparent;
    border-radius: 20px;
    margin-top: 20px;
    padding: 20px;
    @media (min-width: 768px) and (max-width: 1024px) {
        width:100%;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        width:100%;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        width:100%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width:100%;
    }
`
const FormContent = styled.div`
    margin: 0 auto;
`

const RoadmapItems = ()=>{
    const { t } = useTranslation();
    return (
        <>
            <ListingHeader>
                <ListingTitle>Arborswap Roadmap</ListingTitle>
            </ListingHeader>
            <FormWrapper>
                <FormContent>
                <div className="wrapper">  
                    <div className="wrapper-content">
                        <div className="card1">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-btn">
                                        <button type="button">Stage 01</button>
                                    </div>
                                    <div className="card-header-status">In Progress</div>
                                </div>
                                <div className="card-body">
                                    
                                    <div className="progress">
                                        <div className="progress-txt">Features progress :</div>
                                        <div className="progress-count">3 of 4</div>
                                    </div>

                                    <div className="card-list">
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-checked.png" alt="" />
                                            <label htmlFor="item1" className="labelContainer checked" > 
                                                {/* <input type="checkbox" checked id="item1" name="" value="" /> */} Decentralized Exchange v.1
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-checked.png" alt="" />
                                            <label htmlFor="item2" className="labelContainer checked" > 
                                                {/* <input type="checkbox" checked id="item2" name="" value="" /> */} Staking Protocol
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-checked.png" alt="" />
                                            <label htmlFor="item3" className="labelContainer checked" > 
                                                {/* <input type="checkbox" id="item3" name="" value="" /> */} Token & Liquidity Locker
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item4" className="labelContainer" > 
                                                {/* <input type="checkbox" id="item4" name="" value="" /> */} NFT Marketplace
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card2">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-btn">
                                        <button type="button">Stage 02</button>
                                    </div>
                                    <div className="card-header-status">In Progress</div>
                                </div>
                                <div className="card-body">
                                    
                                    <div className="progress">
                                        <div className="progress-txt">Features progress :</div>
                                        <div className="progress-count">1 of 4</div>
                                    </div>

                                    <div className="card-list">
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-checked.png" alt="" />
                                            <label htmlFor="item3" className="labelContainer checked" > 
                                                {/* <input type="checkbox" id="item3" name="" value="" /> */} Airdrop Feature for partner projects
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item1" className="labelContainer" > 
                                                {/* <input type="checkbox" id="item1" name="" value="" /> */} Launchpad
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item2" className="labelContainer" > 
                                                {/* <input type="checkbox" id="item2" name="" value="" /> */} Decentralized Exchange v.2
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item4" className="labelContainer" > 
                                                {/* <input type="checkbox" id="item4" name="" value="" /> */} Lottery platform
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-header-btn">
                                        <button type="button">Stage 03</button>
                                    </div>
                                    <div className="card-header-status">Upcoming</div>
                                </div>
                                <div className="card-body">
                                    
                                    <div className="progress">
                                        <div className="progress-txt">Features progress :</div>
                                        <div className="progress-count">0 of 2</div>
                                    </div>

                                    <div className="card-list">
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item1" className="labelContainer checked" > 
                                                {/* <input type="checkbox" id="item1" name="" value="" /> */} E-Commerce Platform ( Shops )
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        <div className="list-item">
                                            <img src="images/home/imgnew/checkbox-disable.png" alt="" />
                                            <label htmlFor="item2" className="labelContainer checked" > 
                                                {/* <input type="checkbox" id="item2" name="" value="" /> */} Development Tools
                                                {/* <span className="checkmark" /> */}
                                            </label>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
                </FormContent>
            </FormWrapper>
        </>
    );
}

export default RoadmapItems;
