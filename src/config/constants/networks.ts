import { ChainId } from '@arborswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://bsc-dataseed1.defibit.io',
  [ChainId.TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
  [ChainId.ROBURNA]: 'https://preseed-testnet-1.roburna.com/',
}

export default NETWORK_URLS
