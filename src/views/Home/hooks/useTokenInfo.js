import { Contract, ethers } from 'ethers'
import ERCAbi from 'config/abi/ERC20.json';

import { useCalls } from '@usedapp/core'

function useTokenInfo(tokenAddress) {
  const partialCall = tokenAddress && {
    contract: new Contract(tokenAddress, ERCAbi),
    address: tokenAddress,
    args: [],
  }
  const args = ['name', 'symbol', 'decimals', 'totalSupply'].map((method) => partialCall && { ...partialCall, method })
  const [name, symbol, decimals, totalSupply] = useCalls(args, {
    refresh: 'never',
  })

  if (!name && !symbol && !decimals && !totalSupply) {
    return undefined
  }

  return {
    name: name?.value[0] ?? '',
    symbol: symbol?.value[0] ?? '',
    decimals: decimals?.value[0],
    totalSupply: totalSupply?.value[0],
  }
}

export default useTokenInfo
