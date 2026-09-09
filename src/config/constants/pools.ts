import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 2,
  //   stakingToken: tokens.f4h,
  //   earningToken: tokens.f4h,
  //   contractAddress: {
  //     97: '0xCe6DbE579057728D6E0bf79E08168f6039f3a653',
  //     56: '0xCe6DbE579057728D6E0bf79E08168f6039f3a653',
  //   },
  //   depositAddress: {
  //     97: '0x6F1a6c8fE2550143c2f962383429CA2887A65b11',
  //     56: '0x6F1a6c8fE2550143c2f962383429CA2887A65b11',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   isLock: true,
  //   lockTime: 180,
  //   harvest: true,
  //   rate: 8,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 3,
  //   stakingToken: tokens.f4h,
  //   earningToken: tokens.f4h,
  //   contractAddress: {
  //     97: '0xd1Bbd4B26DD7FC3D1d74A70Ed89Fc3Fd94440C1F',
  //     56: '0xd1Bbd4B26DD7FC3D1d74A70Ed89Fc3Fd94440C1F',
  //   },
  //   depositAddress: {
  //     97: '0x4020Ab1e9923c069de759DD8ecc1F147e47589DA',
  //     56: '0x4020Ab1e9923c069de759DD8ecc1F147e47589DA',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   isLock: true,
  //   lockTime: 365,
  //   harvest: true,
  //   rate: 14,
  //   tokenPerBlock: '10',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  {
    sousId: 4,
    stakingToken: tokens.rba,
    earningToken: tokens.rba,
    contractAddress: {
      97: '0x1B6C17ab5347F9085222a6866691DE221f05372E',
      56: '0x1B6C17ab5347F9085222a6866691DE221f05372E',
    },
    depositAddress: {
      97: '0x13200e54d7c97FD4879fBeFfA4d1b1344568615b',
      56: '0x13200e54d7c97FD4879fBeFfA4d1b1344568615b',
    },
    poolCategory: PoolCategory.CORE,
    isLock: false,
    lockTime: 365,
    harvest: true,

    rate: 2,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.rba,
    earningToken: tokens.rba,
    contractAddress: {
      97: '0xA7b4a92C0B00d7344c9df29F412cbA2319875884',
      56: '0xA7b4a92C0B00d7344c9df29F412cbA2319875884',
    },
    depositAddress: {
      97: '0xF0EC83ea8F59F61Fd18121300D729D493B58d9De',
      56: '0xF0EC83ea8F59F61Fd18121300D729D493B58d9De',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 365,
    harvest: true,
    lockInfo: 'Unlocks on mainnet',
    rate: 8,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.rba,
    earningToken: tokens.rba,
    contractAddress: {
      97: '0xC7c94f756B95F6F392F07392076b85f865c39A36',
      56: '0xC7c94f756B95F6F392F07392076b85f865c39A36',
    },
    depositAddress: {
      97: '0xc1fa268d10544BC93D760ce9C67dA3912D7694DC',
      56: '0xc1fa268d10544BC93D760ce9C67dA3912D7694DC',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 730,
    harvest: true,
    rate: 12,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.TTN,
    earningToken: tokens.TTN,
    // contractAddress: {
    //   97: '0xfDD1977EE2B1ae19D907FfD13277610870B209Ed',
    //   56: '0xfDD1977EE2B1ae19D907FfD13277610870B209Ed',
    // },
    depositAddress: {
      97: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
      56: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
    },
    contractAddress: {
      97: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
      56: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    isLock: false,
    lockTime: 365,
    rate: 10, // 10%
    tokenPerBlock: '10', // not important
    sortOrder: 0,
    isFinished: false,
  },
]

export default pools
