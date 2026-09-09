import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ArborSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ArborSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ArborSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ArborSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ArborSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ArborSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ArborSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ArborSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ArborSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ArborSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ArborSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ArborSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ArborSwap')}`,
      }
    default:
      return null
  }
}
