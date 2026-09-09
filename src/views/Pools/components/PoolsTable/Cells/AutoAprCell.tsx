import React from 'react'
import styled from 'styled-components'
import { Text, useMatchBreakpoints } from '@arborswap/uikit'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import BaseCell, { CellContent } from './BaseCell'

interface AprCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 1 0 50px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0 0 120px;
  }
`

const AutoAprCell: React.FC<AprCellProps> = ({ pool }) => {
  return <></>
}

export default AutoAprCell
