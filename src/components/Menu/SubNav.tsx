import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { ButtonTabs, ButtonTabsItem } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.nav`
  width: 436px;
  @media (max-width: 470px) {
    width: 100%;
  }
  /* width: 100%; */
  /* margin-bottom: 40px; */
`

const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    pathname.includes('/create') ||
    pathname.includes('/add') ||
    pathname.includes('/remove') ||
    pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const ComingSoon = styled.span`
  background: ${({ theme }) => theme.colors.gradients.roburna};
  padding: 3px 8px;
  color: #ffffff;
  font-size: 10px;
  border-radius: 8px;
  margin-top: 3px;
`

const Nav = () => {
  const location = useLocation()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <ButtonTabs activeIndex={getActiveIndex(location.pathname)} fullWidth scale="md" variant="primary">
        <ButtonTabsItem id="swap-nav-link" to="/swap" as={Link}>
          {t('Swap')}
        </ButtonTabsItem>
        <ButtonTabsItem id="pool-nav-link" to="/add" as={Link}>
          {t('Liquidity')}
        </ButtonTabsItem>
        <ButtonTabsItem icons={<ComingSoon>Coming Soon</ComingSoon>} id="limits-nav-links" to="#" as={Link}>
          {t('Limit Order')}
        </ButtonTabsItem>
      </ButtonTabs>
    </StyledNav>
  )
}

export default Nav
