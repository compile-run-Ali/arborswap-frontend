import ERCAbi from 'config/abi/ERC20.json';

import { Contract } from '@ethersproject/contracts'


import { useCall} from "@usedapp/core"


function useTokenDecimals(token) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(token, ERCAbi),
        method: "decimals",
        args: [],
      },
      {
        refresh: "never",
      }
    ) ?? {}
  if (error) {
    
    return error
  }
  return value
}

export default useTokenDecimals