// import { BSC, BSCTestnet } from '@usedapp/core'
import { BSC } from '@usedapp/core'
// import { RbaChain } from './constants/chain'

export const networkConfig = {
  readOnlyChainId: BSC.chainId,
  readOnlyUrls: {
    [BSC.chainId]: 'https://rpc.ankr.com/bsc',
    // [BSC.chainId]: BSC.rpcUrl,
    // [BSCTestnet.chainId]: BSCTestnet.rpcUrl,
  },
  networks: [BSC],
  noMetamaskDeactivate: true,
  refresh: 'never',
  pollingInterval: 15000,
}
