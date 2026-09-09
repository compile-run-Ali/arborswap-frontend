import { initializeConnector } from '@web3-react/core'
import { GnosisSafe } from '@web3-react/gnosis-safe'
import { MetaMask } from '@web3-react/metamask'
import { Network } from '@web3-react/network'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'
import { ChainId } from '@arborswap/sdk'
import NETWORK_URLS from 'config/constants/networks'
import { Connection, ConnectionType } from './types'

// Connections based from uniswap interface
// https://github.com/Uniswap/interface/blob/main/src/connection/index.ts

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`)
}

const [web3Network, web3NetworkHooks] = initializeConnector<Network>(
  (actions) =>
    new Network({
      actions,
      urlMap: NETWORK_URLS,
      defaultChainId: ChainId.MAINNET,
    }),
)
export const networkConnection: Connection = {
  connector: web3Network,
  hooks: web3NetworkHooks,
  type: ConnectionType.NETWORK,
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>((actions) => new MetaMask({ actions, onError }))
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
}

const [web3GnosisSafe, web3GnosisSafeHooks] = initializeConnector<GnosisSafe>((actions) => new GnosisSafe({ actions }))
export const gnosisSafeConnection: Connection = {
  connector: web3GnosisSafe,
  hooks: web3GnosisSafeHooks,
  type: ConnectionType.GNOSIS_SAFE,
}

export const [web3WalletConnectV2, web3WalletConnectHooksV2] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID,
        chains: [ChainId.MAINNET],
        showQrModal: true,
      },
      onError,
    }),
)

export const walletConnectConnection: Connection = {
  connector: web3WalletConnectV2,
  hooks: web3WalletConnectHooksV2,
  type: ConnectionType.WALLET_CONNECT,
}

// Order this list for wallet display preferences
export const listOfConnections: Connection[] = [
  injectedConnection,
  walletConnectConnection,
  gnosisSafeConnection,
  networkConnection,
]

export const connectionByType: Record<ConnectionType, Connection> = {
  [ConnectionType.INJECTED]: injectedConnection,
  [ConnectionType.WALLET_CONNECT]: walletConnectConnection,
  [ConnectionType.GNOSIS_SAFE]: gnosisSafeConnection,
  [ConnectionType.NETWORK]: networkConnection,
}
