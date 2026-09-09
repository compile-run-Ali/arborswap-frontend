import { Contract } from '@ethersproject/contracts'
import {utils, constants, BigNumber, Contract as CTR} from 'ethers';
import { useCall, useEthers } from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'
import PrivateAirdropAbi from '../config/abi/PrivateAirdropAbi.json'



export function useAirdropClaimSize(airdropAddress) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PublicAirdropAbi),
        method: "portionSize",
        args: [],
      },
      {
        refresh: "never",
      }
    ) ?? {}
  if (error) {
    
    return 0
  }
  return value
}

export function useAirdropNumberOfClaims(airdropAddress) {
    const { value, error } =
      useCall(
        {
          contract: new Contract(airdropAddress, PublicAirdropAbi),
          method: "totalPortions",
          args: [],
        },
        {
          refresh: "never",
        }
      ) ?? {}
    if (error) {
      
      return 0
    }
    return value 
  }

