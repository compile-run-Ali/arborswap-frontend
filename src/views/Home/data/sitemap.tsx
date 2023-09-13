import React from 'react'
import AirplaneSVG from '../svgs/Sidebar/airplane'
import DashboardSVG from '../svgs/Sidebar/dashboard'
import MoreProductsSVG from '../svgs/Sidebar/more_products'

export const sitemap = [
  {
    id: 1,
    name: 'Home',
    extendable: false,
    icon: <DashboardSVG className="fill-dim-text dark:fill-dim-text-dark hover:fill-primary-green" />,
    activeIcon: <DashboardSVG className="fill-primary-green" />,
    subitems: [],
    link: '/',
    sublinks: [],
  },
  {
    id: 2,
    name: 'Launchpad',
    extendable: true,
    icon: <DashboardSVG className="fill-dim-text dark:fill-dim-text-dark" />,
    activeIcon: <DashboardSVG className="fill-primary-green" />,
    subitems: [
      {
        id: 1,
        name: 'Pools',
        link: '/launchpad/pools',
      },
      {
        id: 2,
        name: 'Create Sale',
        link: '/launchpad/create-sale',
      },
    ],
    sublinks: ['/launchpad/pools', '/launchpad/create-sale'],
  },
  // {
  //   id: 3,
  //   name: 'Locker',
  //   extendable: true,
  //   icon: <SheildSecuritySVG className="fill-dim-text dark:fill-dim-text-dark" />,
  //   activeIcon: <SheildSecuritySVG className="fill-primary-green" />,
  //   subitems: [
  //     {
  //       id: 1,
  //       name: 'Locked Assets',
  //       link: '/locked-assets',
  //     },
  //     {
  //       id: 2,
  //       name: 'Token Locker',
  //       link: '/locker/token-locker',
  //     },
  //     {
  //       id: 3,
  //       name: 'LP Locker',
  //       link: '/locker/lp-locker',
  //     },
  //   ],
  //   sublinks: ['/', '/locker/token-locker', '/locker/lp-locker'],
  // },
  {
    id: 4,
    name: 'Airdropper',
    extendable: true,
    icon: <AirplaneSVG className="fill-dim-text dark:fill-dim-text-dark scale-[1.2]" />,
    activeIcon: <AirplaneSVG className="fill-primary-green scale-[1.2]" />,
    subitems: [
      {
        id: 1,
        name: 'Airdrops',
        link: '/airdropper/airdrops',
      },
      {
        id: 2,
        name: 'Create Airdrop',
        link: '/airdropper/create-airdrop',
      },
    ],
    sublinks: ['/airdropper/airdrops', '/airdropper/create-airdrop'],
  },
  {
    id: 5,
    name: 'More Products',
    extendable: true,
    icon: <MoreProductsSVG className="fill-dim-text dark:fill-dim-text-dark" />,
    activeIcon: <MoreProductsSVG className="fill-primary-green" />,
    subitems: [
      {
        id: 1,
        name: 'Trade',
        link: 'https://www.arborswap.org/swap',
      },
      {
        id: 2,
        name: 'Locker',
        link: 'https://lock.arborswap.org/',
      },
    ],
    sublinks: ['', '/launchpad/token-locker', '/launchpad/lp-locker'],
  },
]
