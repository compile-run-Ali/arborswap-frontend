import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, useMatchBreakpoints } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import { TokenImage } from 'components/TokenImage'
import BaseCell, { CellContent } from './BaseCell'

interface NameCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const NameCell: React.FC<NameCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const { sousId, stakingToken, earningToken, userData, isFinished, isAutoVault } = pool
  const stakingTokenSymbol = stakingToken.symbol
  const earningTokenSymbol = earningToken.symbol

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const isManualCakePool = sousId === 100000000

  const showStakedTag = isStaked

  let title = `${t('Earn')} ${earningTokenSymbol}`
  let subtitle = `${t('Stake')} ${stakingTokenSymbol}`
  const showSubtitle = !isMobile

  if (isAutoVault) {
    title = t('Auto CAKE')
    subtitle = t('Automatic restaking')
  }

  const src = `https://raw.githubusercontent.com/urrbn/arbor-assets/master/images/${stakingToken.address[56]}.png`

  return (
    <StyledCell role="cell">
      <TokenImage token={earningToken} title={earningTokenSymbol} src={src} mr="8px" width={40} height={40} />

      <CellContent>
        {showStakedTag && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <Text bold={!isMobile} small={isMobile}>
          {title}
        </Text>
        {showSubtitle && (
          <Text fontSize="12px" color="textSubtle">
            {subtitle}
          </Text>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell
