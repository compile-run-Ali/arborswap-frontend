import { Contract } from '@ethersproject/contracts'

import { useCall} from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'
import PrivateAirdropAbi from '../config/abi/PrivateAirdropAbi.json'



export function useAirdropIsWL(airdropAddress, account) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PrivateAirdropAbi),
        method: "isWL",
        args: [account],
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

export function useAirdropGetParticipation(airdropAddress, account) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PrivateAirdropAbi),
        method: "userToParticipation",
        args: [account],
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

export function useAirdropIsClaimed(airdropAddress, account) {

    const { value, error } =
      useCall(
        {
          contract: new Contract(airdropAddress, PublicAirdropAbi),
          method: "isAirdropClaimed",
          args: [account],
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

export function useAirdropPortionSize(airdropAddress, account) {

    const { value, error } =
      useCall(
        {
          contract: new Contract(airdropAddress, PublicAirdropAbi),
          method: "portionSize",
          args: [account],
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

