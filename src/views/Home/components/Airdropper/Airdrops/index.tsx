import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, LinkExternal, Button, DashboardIcon, SubMenu, SubMenuItem, Grid } from '@arborswap/uikit'

import AirdropCard from '../AirdropPage/AirdropCard';

const IdoWraper = styled.div``
const IdoItems = styled(Grid)`
  grid-template-columns: 30% 30% 30%;
  gap: 40px;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    grid-template-columns: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 100%;
  }
`
const ViewAll = styled.a`
  width: 276px;
  display: block;
  margin: 60px auto;
  background: #00783F;
  border-radius: 6px;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-align:center;
  padding: 18px 0px;
`

export default function AirdropsBase({ publicList, endedList, timedList, liveList, activeTab }) {

    
    return (
        <IdoWraper>
            <IdoItems>
            {activeTab === 3 &&
                // eslint-disable-next-line react/no-array-index-key
                endedList.map((airdrop, index) => <AirdropCard key={index} data={airdrop} status={activeTab} privateCard={airdrop.info.isPrivate} />)}

            {activeTab === 2 &&
            // eslint-disable-next-line react/no-array-index-key
                timedList.map((airdrop, index) => <AirdropCard key={index} data={airdrop} status={activeTab} privateCard={airdrop.info.isPrivate}/>)}   

            {activeTab === 1 &&
            // eslint-disable-next-line react/no-array-index-key
                liveList.map((airdrop, index) => <AirdropCard key={index} data={airdrop} status={activeTab} privateCard={airdrop.info.isPrivate}/>)} 
            </IdoItems>
            {/* <ViewAll>View All</ViewAll> */}
        </IdoWraper>
    )
}
