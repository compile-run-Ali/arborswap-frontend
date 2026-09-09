import React from 'react'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import useEagerConnect from 'hooks/useEagerConnect'
import { listOfConnections } from 'utils/connection'

const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const connectors: [Connector, Web3ReactHooks][] = listOfConnections.map(({ hooks, connector }) => [connector, hooks])

  useEagerConnect()

  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
}

export default Web3Provider
