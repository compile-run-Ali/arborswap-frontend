import { ethers } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'
import { MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'
import PairAbi from '../config/abi/Pair.json'
import { getTokenSymbolInfo } from './tokenInfo'

const CHAIN_NUMBER = 97

export const getLpInfo = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const pairContract = new Contract(address, PairAbi)
  const calls = []
  try {
    calls.push(pairContract.name())
    calls.push(pairContract.symbol())
    calls.push(pairContract.decimals())
    calls.push(pairContract.totalSupply())
    calls.push(pairContract.token0())
    calls.push(pairContract.token1())
    calls.push(pairContract.factory())

    const [name, symbol, decimals, totalSupply, token0, token1, factory] = await ethcallProvider.all(calls)

    const [token0data, token1data] = await Promise.all([getTokenSymbolInfo(token0), getTokenSymbolInfo(token1)])

    return {
      success: true,
      data: {
        name,
        symbol,
        decimals,
        totalSupply: totalSupply.toString(),
        token0: { ...token0data.data, address: token0 },
        token1: { ...token1data.data, address: token1 },
        factory,
      },
    }
  } catch (error) {
    return {
      success: false,
      data: { ...error },
    }
  }
}
