import { Connector } from '@web3-react/types'
import { Web3ReactHooks } from '@web3-react/core'

export enum ConnectionType {
  INJECTED = 'injected',
  WALLET_CONNECT = 'walletconnect',
  NETWORK = 'NETWORK',
  GNOSIS_SAFE = 'GNOSIS_SAFE',
}

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}
