import { Contract, ethers } from 'ethers'
import TokenLockAbi from 'config/abi/TokenLock.json'

import { useCalls } from '@usedapp/core'

function useLockInfo(tokenAddress) {
  const partialCall = tokenAddress && {
    contract: new Contract(tokenAddress, TokenLockAbi),
    address: tokenAddress,
    args: [],
  }
  const args = ['lockInfo'].map((method) => partialCall && { ...partialCall, method })
  const [lockInfo] = useCalls(args, {
    refresh: 'never',
  })

  if (!lockInfo) {
    return undefined
  }

  return {
    lockInfo: lockInfo?.value ?? '',
  }
}

export default useLockInfo
