import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, useMatchBreakpoints } from '@arborswap/uikit'
import { Pool } from 'state/types'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import { BrowserRouter, Link } from 'react-router-dom'
import NameCell from './Cells/NameCell'
// import EarningsCell from './Cells/EarningsCell'
import AprCell from './Cells/AprCell'
// import TotalStakedCell from './Cells/TotalStakedCell'
import EndsInCell from './Cells/EndsInCell'
import ExpandActionCell from './Cells/ExpandActionCell'
import ActionPanel from './ActionPanel/ActionPanel'
// import AutoEarningsCell from './Cells/AutoEarningsCell'
import AutoAprCell from './Cells/AutoAprCell'

interface PoolRowProps {
  pool: Pool
  account: string
  userDataLoaded: boolean
}

const StyledRow = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  width: 100%;
  display: flex;
  cursor: pointer;
`
const StyledGrid = styled.div`
  width: 100%;
  cursor: pointer;
`
const Stake = styled.div`
  padding: 24px 8px;
`
const StakeTitle = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.02em;
    color: #00783F;
    display: inline-block;
    float:left;
    padding-top: 5px;
    padding-right: 10px;
`
const StakeIcon = styled.img``

const SubA = styled.a``

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {

  return (
    <Link to='pools' >
      <StyledGrid>
        <StyledRow role="row" >
          <NameCell pool={pool} />
          <EndsInCell pool={pool} />
          <Stake>
              <StakeTitle>Stake</StakeTitle>
              <StakeIcon src="images/home/imgnew/poolicons/arrow-left.png" alt="" />
          </Stake>
        </StyledRow>
      </StyledGrid>
    </Link>
  )
  
}

export default PoolRow
