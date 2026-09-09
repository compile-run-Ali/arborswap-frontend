import { ContextApi } from 'contexts/Localization/types'
import { PageBreadcrumb } from './types'

export const DEFAULT_META: PageBreadcrumb = {
  title: 'Exchange',
  subtitle: 'Swap',
  description: 'Make a swap at no cost',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageBreadcrumb => {
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
