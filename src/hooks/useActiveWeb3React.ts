import { useEffect, useState, useRef } from 'react'
import { useWeb3React, Web3ContextType } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

interface IActiveWeb3React extends Web3ContextType<Web3Provider> {
  library: Web3Provider
  provider: Web3Provider
}

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (): IActiveWeb3React => {
  const { account, chainId, provider, ...web3React } = useWeb3React()
  // const appChainId = useSelector((state: State) => state.network.data.chainId)
  // const currChainId = chainId || appChainId
  const currChainId = chainId
  const refChainId = useRef(currChainId)

  useEffect(() => {
    refChainId.current = currChainId
  }, [currChainId])

  // To allow the app to update before passing a chainId !== provider
  if (currChainId !== refChainId.current) {
    return { library: provider, provider, chainId: refChainId.current, account, ...web3React }
  }

  return { library: provider, provider, chainId: currChainId, account, ...web3React }
}

export default useActiveWeb3React
