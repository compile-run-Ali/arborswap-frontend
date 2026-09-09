import React from 'react'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import { useRBAPrice } from 'hooks/useRBAPrice'
import { Menu as UikitMenu } from './menukit'
import config from './config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import NetworkDropdown from './NetworkDropdown'
import './menu.css'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const rbaPriceBnb = useRBAPrice()
  return (
    <UikitMenu
      userMenu={<UserMenu />}
      /* globalMenu={<GlobalSettings />} */
      globalMenu={<><NetworkDropdown /><GlobalSettings /></>}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={rbaPriceBnb?.rbaPriceUsd}
      links={config(t)}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      {...props}
    />
  )
}

export default Menu
