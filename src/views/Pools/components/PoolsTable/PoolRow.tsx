import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, useMatchBreakpoints } from '@arborswap/uikit'
import { Pool } from 'state/types'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
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
  max-width: 470px;
  display: flex;
  cursor: pointer;
`
const StyledGrid = styled.div`
  width: 100%;
  max-width: 470px;
  cursor: pointer;
`

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {
  const { isXs, isSm, isMd, isLg, isXl, isXxl, isTablet, isDesktop } = useMatchBreakpoints()
  const [expanded, setExpanded] = useState(false)
  const shouldRenderActionPanel = useDelayedUnmount(expanded, 300)
  console.log(pool, 'poool')

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <StyledGrid>
      <StyledRow role="row" onClick={toggleExpanded}>
        <NameCell pool={pool} />
        {pool.isAutoVault ? <AutoAprCell pool={pool} /> : <AprCell pool={pool} />}
        <EndsInCell pool={pool} />
        {/* {isDesktop && <EndsInCell pool={pool} />} */}
        <ExpandActionCell expanded={expanded} isFullLayout={isTablet || isDesktop} />
      </StyledRow>
      {shouldRenderActionPanel && (
        <ActionPanel
          account={account}
          pool={pool}
          userDataLoaded={userDataLoaded}
          expanded={expanded}
          breakpoints={{ isXs, isSm, isMd, isLg, isXl, isXxl }}
        />
      )}
    </StyledGrid>
  )
}

export default PoolRow
