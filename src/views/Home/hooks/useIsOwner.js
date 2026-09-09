import { Contract } from "ethers"
import { useCall, useEthers } from "@usedapp/core"
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'



function useIsOwner(airdropAddress, account) {
  const { value, error } =
    useCall(
      {
        contract: new Contract(airdropAddress, PublicAirdropAbi),
        method: "isOwner",
        args: [account],
      },
      {
        refresh: "everyBlock",
      }
    ) ?? {}
  if (error) {
    //  // 
    return false
  }
  return value?.[0]
}

export default useIsOwner