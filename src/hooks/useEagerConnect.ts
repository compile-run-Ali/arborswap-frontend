import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from '@arborswap/uikit'
import useAuth from 'hooks/useAuth'
import { connectionByType } from 'utils/connection'

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc

        resolve()
      },
    }),
  )

const useEagerConnect = () => {
  useEffect(() => {
    const selectedConnector = localStorage.getItem('accountStatus')
    const { connector } = connectionByType[selectedConnector] ?? { connector: undefined }
    if (connector?.connectEagerly) {
      connector.connectEagerly()
    }
  }, [])
}

export default useEagerConnect
