import React, { useRef } from 'react'
import styled from 'styled-components'
import { Flex, Grid } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: Pool[]
  userDataLoaded: boolean
  account: string
}

const StyledTable = styled(Grid)`
  flex-direction: row;
  gap: 20px;
  grid-template-columns: 50% 50%;
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    grid-template-columns: 100%;
    padding: 15px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
      grid-template-columns: 100%;
      padding: 15px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
      grid-template-columns: 100%;
      padding: 15px;
  }
`

const StyledTableFlex = styled.div`
  /* border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.colors.cardBorder}; */
  padding: 1px;
  /* background-size: 400% 400%; */
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, userDataLoaded, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)

  return (
    <Flex flexDirection="column">
      <StyledTableFlex>
        <StyledTable role="table" ref={tableWrapperEl}>
          {pools.map((pool) => (
            <PoolRow key={pool.sousId} pool={pool} account={account} userDataLoaded={userDataLoaded} />
          ))}
        </StyledTable>
      </StyledTableFlex>
    </Flex>
  )
}

export default PoolsTable
