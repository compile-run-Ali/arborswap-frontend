import React from 'react'
import { Flex, IconButton, CogIcon, Button } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const MenuItem = styled.div`
    margin-bottom: 10px;
    &:hover{
        background: #f2f2f2;
    };
`
const ItemIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`
const ItemText = styled.span`
    font-family: 'GilroyHome';
    display: inline-block;
    vertical-align: top;
    padding: 5px 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.02em;
    vertical-align: top;
`
const ItemTik = styled.span`
    display: inline-block;
    vertical-align: top;
    padding-top: 10px;
    margin-left: 10px;
`
const Title = styled.div`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #464754;
`
const SubTitle = styled.div``
const SubTitleSpan = styled.span`
    font-family: 'GilroyHome';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #A69F9F;
    padding-right: 10px;
`
const StatusSuccess = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #84DF3C;
`
const StatusPending = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #E56060;
`

const NlistItem = ({iconimg, title, subtitle, status, isActive}) => {
  const t = useTranslation()

  return (
    <MenuItem >
        <ItemIcon src={iconimg} alt={title} />
        <ItemText>
            <Title>{title}</Title>
            <SubTitle>
                <SubTitleSpan>{subtitle}</SubTitleSpan> 
                { status ? <StatusSuccess /> : <StatusPending />} 
            </SubTitle>
        </ItemText>
        {isActive ? <ItemTik> 
            <img src="/images/headericons/union.png" alt="" />
        </ItemTik> : '' }
        
    </MenuItem>

  )
}

export default NlistItem