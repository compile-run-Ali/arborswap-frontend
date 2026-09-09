import { Contract } from 'ethers'
import LockFactoryAbi from 'config/abi/LockFactory.json'

import { useCall } from '@usedapp/core'
import { FACTORY_ADDRESS } from 'config/constants/address'
import { DEFAULT_CHAIN } from 'config/constants/misc'

function useFeeInfo() {
  const { value, error } =
    useCall({
      contract: new Contract(FACTORY_ADDRESS[DEFAULT_CHAIN], LockFactoryAbi), // instance of called contract
      method: 'fee', // Method to be called
      args: [], // Method arguments - address to be checked for balance
    }) ?? {}
  if (error) {
    console.error(error.message)
    return undefined
  }
  return value
}

export default useFeeInfo
