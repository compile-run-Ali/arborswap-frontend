import React, { useState } from 'react'
import { Flex, IconButton, CogIcon, Button } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import NlistItem from './NlistItem'

const ItemWrap = styled.div`
    position: absolute;
    top: 70px;
    background: #FFFFFF;
    border: 3px solid rgba(166,159,159,0.2);
    box-shadow: 0px 0px 12px #a7a7a7;
    border-radius: 8px;
    padding: 20px;
    min-width: 300px;
    @media (min-width: 481px) and (max-width: 767px) {
        left: -40px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        left: -40px;
    }
`

const MenuItems = styled.div`
    margin: 0px 15px;
    cursor: pointer;
`
const MenuTitle = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #464754;
    margin-bottom: 20px;
`

const Ndropdown = ({updateMenuItem, itemData}) => {
  const t = useTranslation()

  const selectItem = (index) => updateMenuItem( index )

  return (

    <ItemWrap>
        <MenuItems>
            
            <MenuTitle>Switch Network</MenuTitle>
            {itemData.map((item, index)=>{
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                return (<div onClick={ () => selectItem(index)} ><NlistItem iconimg={item.iconimg} title={item.title} subtitle={item.subtitle} status={item.status} isActive={item.isActive} /></div>)
            })}
            
        </MenuItems>
    </ItemWrap>

  )
}

export default React.memo( Ndropdown )