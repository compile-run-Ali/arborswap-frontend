import React from 'react'
import { Trade, TradeType, PairType } from '@arborswap/sdk'
import { Text } from '@arborswap/uikit'
import { Field } from 'state/swap/actions'
import { useUserSlippageTolerance } from 'state/user/hooks'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from 'utils/prices'
import { AutoColumn } from 'components/Layout/Column'
import QuestionHelper from 'components/QuestionHelper'
import { RowBetween, RowFixed } from 'components/Layout/Row'
import SwapRoute from './SwapRoute'

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)
  const routeType = trade.route.pairs[0].pairType
  const routeTypeText = routeType === PairType.INTERNAL ? 'Internal' : 'External'
  const routeTypeFee = routeType === PairType.INTERNAL ? '0.1 %' : '0.05 %'

  return (
    <AutoColumn style={{ padding: '0 16px' }}>
      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            {isExactIn ? 'Minimum received' : 'Maximum sold'}
          </Text>
          <QuestionHelper
            text="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
            ml="4px"
          />
        </RowFixed>
        <RowFixed>
          <Text fontSize="14px">
            {isExactIn
              ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${trade.outputAmount.currency.symbol}` ??
                '-'
              : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${trade.inputAmount.currency.symbol}` ?? '-'}
          </Text>
        </RowFixed>
      </RowBetween>

      <RowBetween>
        <RowFixed>
          <Text fontSize="14px" color="textSubtle">
            Fee
          </Text>
          <QuestionHelper
            text={
              <>
                <Text>
                  {routeTypeText} trade a {routeTypeFee} fee is paid
                </Text>
              </>
            }
            ml="4px"
          />
        </RowFixed>
        <Text fontSize="14px">{routeTypeFee}</Text>
      </RowBetween>
    </AutoColumn>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade)

  return (
    <AutoColumn gap="0px">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <RowBetween style={{ padding: '0 16px' }}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Text fontSize="14px" color="textSubtle">
                    Route
                  </Text>
                  <QuestionHelper
                    text="Routing through these router resulted in the best price for your trade."
                    ml="4px"
                  />
                </span>
                <SwapRoute trade={trade} />
              </RowBetween>
            </>
          )}
        </>
      )}
    </AutoColumn>
  )
}
