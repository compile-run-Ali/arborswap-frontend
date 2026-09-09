import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Box,
  Flex,
  HelpIcon,
  Link,
  LinkExternal,
  MetamaskIcon,
  Skeleton,
  Text,
  TimerIcon,
  useTooltip,
} from '@arborswap/uikit'
import { BASE_BSC_SCAN_URL } from 'config'
import { getBscScanLink } from 'utils'
import { useBlock } from 'state/block/hooks'
import BigNumber from 'bignumber.js'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { CompoundingPoolTag, ManualPoolTag } from 'components/Tags'
import { getAddress, getCakeVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { registerToken } from 'utils/wallet'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { convertSharesToCake, getPoolBlockInfo } from 'views/Pools/helpers'
import Harvest from './Harvest'
import Stake from './Stake'
import Apr from '../Apr'

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 700px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 700px;
  }
  to {
    max-height: 0px;
  }
`

const StyledActionPanel = styled.div<{ expanded: boolean }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  margin-top: -10px;
  border-radius: 0 0 6px 6px;
  display: flex;
  gap: 20px;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 22px 12px 12px 12px;
  width: 100%;
  max-width: 470px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: column;
    /* flex-direction: row; */
    padding: 16px 32px;
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    /* flex-direction: row; */
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`

type MediaBreakpoints = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  isXxl: boolean
}

interface ActionPanelProps {
  account: string
  pool: Pool
  userDataLoaded: boolean
  expanded: boolean
  breakpoints: MediaBreakpoints
}

const InfoSection = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  padding: 8px 8px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0;
    flex-basis: 230px;
  }
`

const ActionPanel: React.FC<ActionPanelProps> = ({ account, pool, userDataLoaded, expanded, breakpoints }) => {
  const { sousId, stakingToken, earningToken, totalStaked, contractAddress, userData, isAutoVault } = pool
  const { t } = useTranslation()
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getCakeVaultAddress()
  const { currentBlock } = useBlock()
  const { isXs, isSm, isMd } = breakpoints
  const showSubtitle = (isXs || isSm) && sousId === 100000000
  console.log(pool, 'pool')

  const { shouldShowBlockCountdown } = getPoolBlockInfo(pool, currentBlock)

  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const poolStakingTokenBalance = stakingTokenBalance
  const isManualCakePool = sousId === 100000000

  const getTotalStakedBalance = () => {
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }

  const {
    targetRef: totalStakedTargetRef,
    tooltip: totalStakedTooltip,
    tooltipVisible: totalStakedTooltipVisible,
  } = useTooltip(t('Total amount of %symbol% staked in this pool', { symbol: stakingToken.symbol }), {
    placement: 'bottom',
  })

  const manualTooltipText = t('You must harvest and compound your earnings from this pool manually.')
  const autoTooltipText = t(
    'Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.',
  )

  const {
    targetRef: tagTargetRef,
    tooltip: tagTooltip,
    tooltipVisible: tagTooltipVisible,
  } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
    placement: 'bottom-start',
  })

  // const maxStakeRow = stakingLimit.gt(0) ? (
  //   <Flex mb="8px" justifyContent="space-between">
  //     <Text>{t('Max. stake per user')}:</Text>
  //     <Text>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
  //   </Flex>
  // ) : null

  // const blocksRow =
  //   blocksRemaining || blocksUntilStart ? (
  //     <Flex mb="8px" justifyContent="space-between">
  //       <Text>{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
  //       <Flex>
  //         <Link external href={getBscScanLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
  //           <Balance fontSize="16px" value={blocksToDisplay} decimals={0} color="primary" />
  //           <Text ml="4px" color="primary" textTransform="lowercase">
  //             {t('Blocks')}
  //           </Text>
  //           <TimerIcon ml="4px" color="primary" />
  //         </Link>
  //       </Flex>
  //     </Flex>
  //   ) : (
  //     <Skeleton width="56px" height="16px" />
  //   )

  const aprRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text>{isAutoVault ? t('APY') : t('APR')}:</Text>
      <Apr pool={pool} showIcon stakedBalance={poolStakingTokenBalance} performanceFee={0} />
    </Flex>
  )

  const totalStakedRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text maxWidth={['50px', '100%']}>{t('Total staked')}:</Text>
      <Flex alignItems="center">
        {totalStaked && totalStaked.gte(0) ? (
          <>
            <Balance fontSize="16px" value={getTotalStakedBalance()} decimals={0} unit={` ${stakingToken.symbol}`} />
            <span ref={totalStakedTargetRef}>
              <HelpIcon color="textSubtle" width="20px" ml="4px" />
            </span>
          </>
        ) : (
          <Skeleton width="56px" height="16px" />
        )}
        {totalStakedTooltipVisible && totalStakedTooltip}
      </Flex>
    </Flex>
  )

  return (
    <StyledActionPanel expanded={expanded}>
      <ActionContainer>
        {showSubtitle && (
          <Text mt="4px" mb="16px" color="textSubtle">
            {isAutoVault ? t('Automatic restaking') : `${t('Earn')} CAKE ${t('Stake').toLocaleLowerCase()} CAKE`}
          </Text>
        )}
        <Harvest {...pool} userDataLoaded={userDataLoaded} />
        <Stake pool={pool} userDataLoaded={userDataLoaded} />
      </ActionContainer>
    </StyledActionPanel>
  )
}

export default ActionPanel
