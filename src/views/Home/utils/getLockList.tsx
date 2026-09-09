import { ethers } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'
import { FACTORY_ADDRESS, MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'
import TokenLockAbi from '../config/abi/TokenLock.json'
import LockFactoryAbi from '../config/abi/LockFactory.json'
import { DEFAULT_CHAIN, TOTAL_DATA_DISPLAY } from '../config/constants/misc'

const CHAIN_NUMBER = DEFAULT_CHAIN

export const getTokenLockInfos = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  for (let i = 0; i < address.length; i++) {
    const tokenContract = new Contract(address[i], TokenLockAbi)
    calls.push(tokenContract.lockInfo())
    calls.push(tokenContract.owner())
  }
  const result = []
  try {
    const resCall = await ethcallProvider.all(calls)
    let a = 0
    let b = 1
    for (let i = 0; i < address.length; i++) {
      const res = {
        address: address[i],
        info: resCall[a],
        owner: resCall[b],
      }
      result.push(res)
      a += 2
      b += 2
    }

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    return {
      success: false,
      data: result,
    }
  }
}

export const getLpLockInfos = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  for (let i = 0; i < address.length; i++) {
    const tokenContract = new Contract(address[i], TokenLockAbi)
    calls.push(tokenContract.lockInfo())
    calls.push(tokenContract.owner())
  }
  const result = []
  try {
    const resCall = await ethcallProvider.all(calls)
    let a = 0
    let b = 1
    for (let i = 0; i < address.length; i++) {
      const res = {
        address: address[i],
        info: resCall[a],
        owner: resCall[b],
      }
      result.push(res)
      a += 2
      b += 2
    }

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    return {
      success: false,
      data: result,
    }
  }
}

export const getTokenLockList = async () => {
  let START = 0;
    let END = 0
  try {
    const totalData = await getTotalLock()

    if (totalData.success) {
      if (totalData.data.token < TOTAL_DATA_DISPLAY) {
        START = 0
        END = totalData.data.token
      } else {
        END = totalData.data.token >= TOTAL_DATA_DISPLAY ? totalData.data.token : TOTAL_DATA_DISPLAY
        START = totalData.data.token >= TOTAL_DATA_DISPLAY ? totalData.data.token - TOTAL_DATA_DISPLAY : 0
      }
    }
  } catch (error) {
    return {
      success: false,
      data: {},
    }
  }

  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(FACTORY_ADDRESS[CHAIN_NUMBER], LockFactoryAbi)
  const calls = []
  try {
    calls.push(tokenContract.getTokenLock(START, END))
    const [token] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: token,
    }
  } catch (error) {
    return {
      success: false,
      data: {},
    }
  }
}

export const getLiquidityLockList = async () => {
  let START = 0;
    let END = 0

  try {
    const totalData = await getTotalLock()

    if (totalData.success) {
      if (totalData.data.liquidity < TOTAL_DATA_DISPLAY) {
        START = 0
        END = totalData.data.liquidity
      } else {
        END = totalData.data.liquidity >= TOTAL_DATA_DISPLAY ? totalData.data.liquidity : TOTAL_DATA_DISPLAY
        START = totalData.data.liquidity >= TOTAL_DATA_DISPLAY ? totalData.data.liquidity - TOTAL_DATA_DISPLAY : 0
      }
    }
  } catch (error) {
    return {
      success: false,
      data: {},
    }
  }

  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(FACTORY_ADDRESS[CHAIN_NUMBER], LockFactoryAbi)
  const calls = []
  try {
    calls.push(tokenContract.getLiquidityLock(START, END))

    const [liquidity] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: liquidity,
    }
  } catch (error) {
    return {
      success: false,
      data: {},
    }
  }
}

export const getTotalLock = async () => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(FACTORY_ADDRESS[CHAIN_NUMBER], LockFactoryAbi)
  const calls = []
  try {
    calls.push(tokenContract.getTotalTokenLock())
    calls.push(tokenContract.getTotalLiquidityLock())

    const [token, liquidity] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: { token: token.toNumber(), liquidity: liquidity.toNumber() },
    }
  } catch (error) {
    return {
      success: false,
      data: { token: 0, liquidity: 0 },
    }
  }
}
