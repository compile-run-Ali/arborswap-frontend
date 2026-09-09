import { ethers } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'
import { MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'
import ERC20Abi from '../config/abi/ERC20.json'

const CHAIN_NUMBER = 56

export const getTokenInfo = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const tokenContract = new Contract(address, ERC20Abi)
  const calls = []
  try {
    calls.push(tokenContract.name())
    calls.push(tokenContract.symbol())
    calls.push(tokenContract.decimals())
    calls.push(tokenContract.totalSupply())

    const [name, symbol, decimals, totalSupply] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: {
        name,
        symbol,
        decimals,
        totalSupply: totalSupply.toString(),
      },
    }
  } catch (error) {
    
    return {
      success: false,
      data: {},
    }
  }
}

export const getTokenSymbolInfo = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const tokenContract = new Contract(address, ERC20Abi)
  const calls = []
  try {
    calls.push(tokenContract.symbol())
    const [symbol] = await ethcallProvider.all(calls)
    return {
      success: true,
      data: {
        symbol,
      },
    }
  } catch (error) {
    return {
      success: false,
      data: {},
    }
  }
}
