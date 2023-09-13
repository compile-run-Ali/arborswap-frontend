import { MenuEntry } from '@arborswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Launchpad'),
    icon: 'LaunchpadIcon',
    items: [
      {
        label: t('Pools'),
        href: 'http://protocol.arborswap.org/launchpad/pools',
      },
      {
        label: t('Create Sale'),
        href: 'http://protocol.arborswap.org/launchpad/create-sale',
      },

    ],
  },
  {
    label: t('Locker'),
    icon: 'PoolIcon',
    items: [
      {
        label: t('Locked Assets'),
        href: 'https://protocol.arborswap.org/locked-assets',
      },
      {
        label: t('Token Locker'),
        href: 'https://protocol.arborswap.org/locker/token-locker',
      },
      {
        label: t('LP Locker'),
        href: 'https://protocol.arborswap.org/locker/lp-locker',
      },
    ],
  },
  {
    label: t('Airdropper'),
    icon: 'AirdroopIcon',
    calloutClass: 'airdropper',
    items: [
      {
        label: t('Airdrops'),
        href: 'https://protocol.arborswap.org/airdropper/airdrops',
      },
      {
        label: t('Create Airdrop'),
        href: 'https://protocol.arborswap.org/airdropper/create-airdrop',
      }
    ],
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    calloutClass: 'tradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/add',
      },
      {
        label: t('Limit Orders'),
        href: '/pool',
      },
    ],
  },
  // {
  //   label: t('Farms'),
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  /* {
    label: t('More Products'),
    icon: 'MoreIcon',
    items: [
      // {
      //   label: t('Launchpad'),
      //   href: '#1',
      // },
      {
        label: t('Locker'),
        href: 'http://lock.arborswap.org/',
      },
      {
        label: t('Airdropper'),
        href: 'http://airdrop.arborswap.org/',
      },
    ],
  }, */
]

export default config
