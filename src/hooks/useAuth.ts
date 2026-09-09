import { useWeb3React } from '@web3-react/core'
import { WalletConnect } from '@web3-react/walletconnect-v2'

import { ConnectorNames } from '@arborswap/uikit'

import { connectionByType } from 'utils/connection'
import { useTranslation } from 'contexts/Localization'

function deleteWc2LocalStorageItems(): void {
  const prefix = 'wc@2'
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i)
    if (key && key.startsWith(prefix)) {
      localStorage.removeItem(key)
    }
  }
}
const useAuth = () => {
  const { connector } = useWeb3React()

  const login = async (connectorType?: ConnectorNames) => {
    if (connectorType) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { connector } = connectionByType[connectorType]
      try {
        await connector.activate()
      } catch (error) {
        console.debug(error)
        console.error(`connection error: ${error}`)
      }
    }
  }

  const logout = () => {
    if (connector && connector.deactivate) {
      connector.deactivate()
    }
    connector.resetState()
    if (connector instanceof WalletConnect) {
      deleteWc2LocalStorageItems()
    }
  }

  return { login, logout }
}

export default useAuth
