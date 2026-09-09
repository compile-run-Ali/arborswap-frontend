import { Contract } from '@ethersproject/contracts'
import { useCall } from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'


export function useAirdropIsCancelled(airdropAddress) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PublicAirdropAbi),
        method: "airdropCancelled",
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

export function useAirdropIsEmpty(airdropAddress) {

    const { value, error } =
      useCall(
        {
          contract: new Contract(airdropAddress, PublicAirdropAbi),
          method: "airdropEmpty",
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

export function useAirdropIsStarted(airdropAddress) {

    const { value, error } =
      useCall(
        {
          contract: new Contract(airdropAddress, PublicAirdropAbi),
          method: "airDropStarted",
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

