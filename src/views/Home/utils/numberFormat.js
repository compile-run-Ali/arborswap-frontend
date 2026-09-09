import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import moment from 'moment'

export const datetimeToTimestamp = (data) => {
  return moment(data).unix()
}

export const isValidUrl = (urlString) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ) // validate fragment locator
  return !!urlPattern.test(urlString)
}

// 10 token = 1 bnb

export function nFormatter(num, digits = 2) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'Q' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .find(function (item) {
      return num >= item.value
    })
  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0'
}

export function formatNumber(x, max = 6) {
  return x.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: max,
  })
}

export const formatBigToNum = (val, dec, comma = 0) => {
  if (val === '' || dec === '') {
    return '0'
  }
  return formatNumber(formatUnits(BigNumber.from(val), dec) * 1, comma)
}

export const bigValuePercent = (val, dec, percent = 100, comma = 0) => {
  if (BigNumber.from(val).lt(percent)) {
    return '0'
  }
  const value = BigNumber.from(val).mul(100).div(percent)
  return value
}
