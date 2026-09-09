import { BSC, BSCTestnet } from '@usedapp/core'
import { RbaChain } from './chain'

export const MULTICALL_ADDRESS = {
  [BSC.chainId]: BSC.multicallAddress,
  [BSCTestnet.chainId]: BSCTestnet.multicallAddress,
  [RbaChain.chainId]: RbaChain.multicallAddress,
}

export const RPC_ADDRESS = {
  [BSCTestnet.chainId]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  159: 'https://preseed-testnet-1.roburna.com/',
  [BSC.chainId]: 'https://rpc.ankr.com/bsc'
}

export const ADMIN_ADDRESS = {
  [BSC.chainId]: BSC.multicallAddress,
  [BSCTestnet.chainId]: '0x1bf08cf44A856fe437Bedc89BA53bF43FE5Ca15D',
  [RbaChain.chainId]: '0x00687AD41983f022929E9e5C9a2cd58A291F661f',
}

export const FACTORY_ADDRESS = {
  [BSC.chainId]: BSC.multicallAddress,
  [BSCTestnet.chainId]: '0xCB33f39bB655019d3abdBF5489A4DABD00759943',
  [RbaChain.chainId]: '0xB503BA98dF8B35121df3034Bb319A6f71c502D98',
}

export const AIRDROP_FACTORY_ADDRESS = {
  [BSC.chainId]: BSC.multicallAddress,
  [BSCTestnet.chainId]: '0xCB33f39bB655019d3abdBF5489A4DABD00759943'
}
