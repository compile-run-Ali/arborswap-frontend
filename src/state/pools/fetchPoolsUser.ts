import poolsConfig from 'config/constants/pools'
import normalStakeABI from 'config/abi/normalStake.json'
import lockStakeABI from 'config/abi/lockStake.json'
import ttnStakeABI from 'config/abi/ttnStakeAbi.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utils/multicall'
import { getAddress } from 'utils/addressHelpers'
import { simpleRpcProvider } from 'utils/providers'
import BigNumber from 'bignumber.js'

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// RBA pools use the native RBA token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((p) => p.stakingToken.symbol !== 'BNB')
const bnbPools = poolsConfig.filter((p) => p.stakingToken.symbol === 'BNB')
const nonMasterPools = poolsConfig.filter((p) => p.sousId !== 100000000)
const lockPools = poolsConfig.filter((p) => p.isLock === true && p.sousId !== 7)
const normalPools = poolsConfig.filter((p) => p.isLock !== true && p.sousId !== 7)
const ttnPools = poolsConfig.filter((p) => p.sousId === 7)

export const fetchPoolsAllowance = async (account) => {
  const calls = poolsConfig.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'allowance',
    params: [account, getAddress(p.depositAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return poolsConfig.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserBalances = async (account) => {
  // Non RBA pools
  const calls = nonBnbPools.map((p) => ({
    address: getAddress(p.stakingToken.address),
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // RBA pools
  const bnbBalance = await simpleRpcProvider.getBalance(account)
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(bnbBalance.toString()).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const normalCalls = normalPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'stakingBalance',
    params: [account],
  }))
  const lockCalls = lockPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'stakingBalance',
    params: [account],
  }))

  const ttnCalls = ttnPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'staker',
    params: [account],
  }))

  const userInfo = await multicall(normalStakeABI, normalCalls)
  const userLockInfo = await multicall(lockStakeABI, lockCalls)
  const userTtnInfo = await multicall(ttnStakeABI, ttnCalls)

  const lockStakedBalances = lockPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userLockInfo[index]).toJSON(),
    }),
    {},
  )

  const stakedBalances = normalPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index]).toJSON(),
    }),
    {},
  )

  const TtnStakedBalances = ttnPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userTtnInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  return { ...stakedBalances, ...lockStakedBalances, ...TtnStakedBalances}
}

export const fetchUserUnlockTimes = async (account) => {
  const ttnCalls = ttnPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'staker',
    params: [account],
  }))
  
  const normalCalls = normalPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'startTime',
    params: [account],
  }))
  const lockCalls = lockPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'userEndTime',
    params: [account],
  }))

  const userInfo = await multicall(normalStakeABI, normalCalls)
  const userLockInfo = await multicall(lockStakeABI, lockCalls)
  const userTtnInfo = await multicall(ttnStakeABI, ttnCalls)

  const lockStakedBalances = lockPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userLockInfo[index]).toJSON(),
    }),
    {},
  )

  const stakedBalances = normalPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index]).toJSON(),
    }),
    {},
  )
  const TtnStakedBalances = ttnPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userTtnInfo[index].startTime._hex).toJSON(),
    }),
    {},
  )

  return { ...stakedBalances, ...lockStakedBalances, ...TtnStakedBalances }
}

export const fetchUserPendingRewards = async (account) => {
  

  const normalCalls = normalPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'getTotalRewards',
    params: [account],
  }))

  const lockCalls = lockPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'getTotalRewards',
    params: [account],
  }))

  const ttnCalls = ttnPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'getTotalRewards',
    params: [account],
  }))

  const res = await multicall(normalStakeABI, normalCalls)

  const pendingRewards = normalPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )
  const resLock = await multicall(lockStakeABI, lockCalls)

  const pendingLockRewards = lockPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(resLock[index]).toJSON(),
    }),
    {},
  )

  const ttnRes = await multicall(ttnStakeABI, ttnCalls)

  const ttnPendingRewards = ttnPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(ttnRes[index]).toJSON(),
    }),
    {},
  )
  return { ...pendingRewards, ...pendingLockRewards, ...ttnPendingRewards }
}
