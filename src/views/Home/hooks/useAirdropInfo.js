import { Contract } from '@ethersproject/contracts'
import { useCall } from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'


function useAirdropInfo(airdropAddress) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PublicAirdropAbi),
        method: "airdropInfo",
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

export default useAirdropInfo