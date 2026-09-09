import { CurrencyAmount, ETHER, JSBI } from '@arborswap/sdk'
import { MIN_BNB } from '../config/constants'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function halfAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === ETHER) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_BNB)) {
      return CurrencyAmount.ether(JSBI.divide(currencyAmount.raw, JSBI.BigInt(2)))
    }
    return CurrencyAmount.ether(JSBI.BigInt(0))
  }
  return currencyAmount
}

export default halfAmountSpend
