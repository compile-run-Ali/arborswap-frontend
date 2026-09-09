import { ethers } from 'ethers'
import { Contract, Provider, setMulticallAddress } from 'ethers-multicall'
import { DEFAULT_CHAIN, TOTAL_DATA_DISPLAY } from '../config/constants/misc'
import PublicAirdropAbi from '../config/abi/PublicAirdropAbi.json'
import PrivateAirdropAbi from '../config/abi/PrivateAirdropAbi.json'
import AirdropFactoryAbi from '../config/abi/AirdropFactory.json'
import { FACTORY_ADDRESS, MULTICALL_ADDRESS, RPC_ADDRESS } from '../config/constants/address'

const CHAIN_NUMBER = DEFAULT_CHAIN

export const sortAirdrops = async (airdrops) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()

  const started = [];
  const ended = [];
  const timed = [];

  try{
  
    for(let i = 0; i < airdrops.length; i++ ){
      const airdropContract = new Contract(airdrops[i], PrivateAirdropAbi);
      const calls = []
      calls.push(airdropContract.airDropStarted())
      // eslint-disable-next-line no-await-in-loop
      const isStarted = await ethcallProvider.all(calls)
      
      if(isStarted[0] === true){
        started.push(airdrops[i])
      }else{
        timed.push(airdrops[i])
      }
    
    }
    
  
    for(let i = 0; i < started.length; i++ ){
      const airdropContract = new Contract(started[i], PrivateAirdropAbi);
      const calls = []
      calls.push(airdropContract.airdropEmpty())
      calls.push(airdropContract.airdropCancelled())
      // eslint-disable-next-line no-await-in-loop
      const res = await ethcallProvider.all(calls)
      if(res[0] || res[1]){
        ended.push(started[i])
      }
    }
  
    const live = started.filter( x => !ended.includes(x) );
    return {
      success: true,
      data: { 
        timed,
        live,
        ended
      },
    }
    
  }catch (error){
    
    return {
      success: false
    }
  }
  
}

export const getAirdropStatus = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  const contract = new Contract(address[0], PrivateAirdropAbi)
  calls.push(contract.airDropStarted())
  calls.push(contract.airdropEmpty())
  calls.push(contract.airdropCancelled())
  
  const result = []
  try {
    const resCall = await ethcallProvider.all(calls)
    const a = 0
    const b = 1
    
    const res = {
      airDropStarted: resCall[0],
      isEmpty: resCall[1],
      airdropCancelled: resCall[2],
    }
    result.push(res)
      

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

export const getUserParticipationPrivate = async (address, account) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  const contract = new Contract(address, PrivateAirdropAbi)
  calls.push(contract.isWL(account))
  calls.push(contract.userToParticipation(account))
  
  const result = []
  try {
    const resCall = await ethcallProvider.all(calls)
    
    const res = {
      isWL: resCall[0],
      participation: resCall[1]
    }
    result.push(res)
      

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

export const getUserParticipationPublic = async (address, account) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  const contract = new Contract(address, PublicAirdropAbi)
  calls.push(contract.isAirdropClaimed(account))
  calls.push(contract.portionSize())
  
  const result = []
  try {
    const resCall = await ethcallProvider.all(calls)
    
    const res = {
      isAirdropClaimed: resCall[0],
      portionSize: resCall[1]
    }
    result.push(res)
      

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

export const getAirdropInfos = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  for (let i = 0; i < address.length; i++) {
    const tokenContract = new Contract(address[i], PublicAirdropAbi)
    calls.push(tokenContract.getInfo())
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

export const getPublicAirdropsInfos = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  for (let i = 0; i < address.length; i++) {
    const tokenContract = new Contract(address[i], PublicAirdropAbi)
    calls.push(tokenContract.portionSize())
    calls.push(tokenContract.totalPortions())
    calls.push(tokenContract.portionsLeft())
  }
  const result = [];
  
  try {
    const resCall = await ethcallProvider.all(calls)
    result.push(resCall)
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

export const getPublicAirdrops = async (address) => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()
  const calls = []
  for (let i = 0; i < address.length; i++) {
    const tokenContract = new Contract(address[i], PublicAirdropAbi)
    calls.push(tokenContract.getInfo())
  }
  const result = [];
  const publicAirdrops = [];
  try {
   
    const resCall = await ethcallProvider.all(calls)
    result.push(resCall)

    
    for (let i = 0; i < address.length; i++) {
      if(result[0][i].isPrivate === false){
        publicAirdrops.push(address[i])
      }
      
    }

    return {
      success: true,
      data: publicAirdrops,
    }
  } catch (error) {
    return {
      success: false,
      data: result,
    }
  }
}


export const getAirdropList = async () => {
  let START = 0;
    let END = 0
  try {
    const totalData = await getTotalAirdrop()
    //

    if (totalData.success) {
      if (totalData.data.number < TOTAL_DATA_DISPLAY) {
        START = 0
        END = totalData.data.number
        
      } else {
        //
        END = totalData.data.number >= TOTAL_DATA_DISPLAY ? totalData.data.number : TOTAL_DATA_DISPLAY
        
        START = totalData.data.number >= TOTAL_DATA_DISPLAY ? totalData.data.number - TOTAL_DATA_DISPLAY : 0
        
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

  const tokenContract = new Contract('0x7442c5433e34Ddf0088d60BeFFefB1536d421904', AirdropFactoryAbi)
  
  try {
    const tokenCall = await tokenContract.getAllAirdrops(START, END)
    const [token] = await ethcallProvider.all([tokenCall]);
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


export const getTotalAirdrop = async () => {
  setMulticallAddress(CHAIN_NUMBER, MULTICALL_ADDRESS[CHAIN_NUMBER])
  const provider = new ethers.providers.JsonRpcProvider(RPC_ADDRESS[CHAIN_NUMBER])
  const ethcallProvider = new Provider(provider)
  await ethcallProvider.init()


  const tokenContract = new Contract('0x7442c5433e34Ddf0088d60BeFFefB1536d421904', AirdropFactoryAbi)
  
  try {
    const numberCall = await tokenContract.getNumberOfAirdropsDeployed()
    const [number] = await ethcallProvider.all([numberCall]);
    
    return {
      success: true,
      data: { number: number.toNumber()},
    }
  } catch (error) {
    
    return {
      success: false,
      data: { token: 0 },
    }
  }
}

