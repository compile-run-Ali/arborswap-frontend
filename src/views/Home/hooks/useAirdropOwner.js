import { Contract } from '@ethersproject/contracts'
import { useCall} from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'

function useAirdropOwner(airdropAddress) {

  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PublicAirdropAbi),
        method: "owner",
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

export default useAirdropOwner