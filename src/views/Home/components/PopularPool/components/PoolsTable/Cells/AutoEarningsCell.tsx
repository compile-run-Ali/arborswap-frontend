import React from 'react'
import styled from 'styled-components'
import { Skeleton, Text, useTooltip, HelpIcon, Flex, Box, useMatchBreakpoints } from '@arborswap/uikit'
import { Pool } from 'state/types'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { getCakeVaultEarnings } from 'views/Pools/helpers'
import BaseCell, { CellContent } from './BaseCell'

interface AutoEarningsCellProps {
  pool: Pool
  account: string
  userDataLoaded: boolean
}

const AutoEarningsCell: React.FC<AutoEarningsCellProps> = ({ pool, account, userDataLoaded }) => {
  const { t } = useTranslation()

  return <></>
}

export default AutoEarningsCell
