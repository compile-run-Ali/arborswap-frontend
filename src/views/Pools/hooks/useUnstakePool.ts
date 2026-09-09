import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { useSousChef } from 'hooks/useContract'
import { BIG_TEN } from 'utils/bigNumber'
import getGasPrice from 'utils/getGasPrice'

const sousUnstake = async (sousChefContract, amount, decimals) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.unstake(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), {
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const useUnstakePool = (sousId: number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      await sousUnstake(sousChefContract, amount, decimals)
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakePool
