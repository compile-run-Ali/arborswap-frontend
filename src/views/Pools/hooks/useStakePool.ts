import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL, DEFAULT_GAS_LIMIT_STAKE } from 'config'
import { BIG_TEN } from 'utils/bigNumber'
import { useSousChef } from 'hooks/useContract'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT_STAKE,
}

const sousStake = async (sousId,sousChefContract, amount, decimals = 18) => {
  const gasPrice = getGasPrice()
  const tx = await sousChefContract.stake(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString(), {
    ...options,
    gasPrice,
  })
  const receipt = await tx.wait()
  return receipt.status
}

const useStakePool = (sousId: number) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      await sousStake(sousId, sousChefContract, amount, decimals)

      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStakePool
