import React, { useState } from 'react'
import { Flex, IconButton, CogIcon, Button } from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import Ndropdown from './Ndropdown'

const ItemWrap = styled.div`
    position: relative;
`

const MenuItem = styled.div`
    margin: 0px 15px;
    background: #F5F1EB;
    cursor: pointer;
    box-shadow: 0px 0px 2px #dcdcdc;
    @media (min-width: 481px) and (max-width: 767px) {
        width: 80px;
        height: 48px;
        display: flex;
        align-items: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 80px;
        height: 48px;
        display: flex;
        align-items: center;
    }
`
const MenuItemLeft = styled.div`
    display: inline-block;
    padding: 10px;
    @media (min-width: 481px) and (max-width: 767px) {
        width: 41px;
        float:left;
        padding: 0px;
        margin-left: 10px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        width: 41px;
        float:left;
        padding: 0px;
        margin-left: 8px;
    }
`
const MenuItemRight = styled.div`
    display: inline-block;
    background: #FFFFFF;
    border-radius: 6px;
    @media (min-width: 481px) and (max-width: 767px) {
        padding: 0px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
        padding: 0px;
    }
`
const ItemIcon = styled.span`
    display: inline-block;
    padding-right: 10px;
`
const ItemText = styled.span`
    font-family: 'GilroyHome';
    display: inline-block;
    vertical-align: top;
    padding: 5px 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.02em;
    @media (min-width: 481px) and (max-width: 767px) {
        display: none
    }
    @media (min-width: 320px) and (max-width: 480px) {
        display: none
    }
`


const MenuButton = () => {
    const t = useTranslation()
    
    const [toggle, setToggle] = useState(false)
    const [activeItem, setActiveItem] = useState({
        img: '/images/headericons/BinanceSmartChainBadge.svg',
        title: 'Binance Smart Chain'
    })

    const [itemData, setItemData] = useState([
        {
            iconimg: "/images/headericons/BinanceSmartChainBadge.svg",
            title: "Binance Smart Chain", 
            subtitle: "Connected", 
            status: true, 
            isActive: true
        },{
            iconimg: "/images/headericons/EthereumChain.svg",
            title: "Ethereum Chain", 
            subtitle: "Not Connected", 
            status: false, 
            isActive: false
        },
/*         {
            iconimg: "/images/headericons/PolygonChain.svg",
            title: "Polygon Chain", 
            subtitle: "Not Connected", 
            status: false, 
            isActive: false
        } */
    ])
    
    const toggleNetworkDropdown = ()=>{
         
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    }

    const updateMenuItem = (index)=>{

        let temItem = [...itemData]
        temItem = temItem.map((item)=>{ 
            return {...item, isActive: false, status: false, subtitle: "Not Connected",  }
        })
        
        temItem[index].isActive = true;
        temItem[index].status = true;
        temItem[index].subtitle = "Connected";
    
        setItemData(temItem);

        setActiveItem({
            img: itemData[index].iconimg,
            title: itemData[index].title
        })
        
        setToggle(false)
    }

  return (
        <ItemWrap>
            <MenuItem onClick={toggleNetworkDropdown}>
                <MenuItemLeft>
                    <ItemIcon>
                        <img width="26" src={activeItem.img} alt="" />
                    </ItemIcon>
                    <ItemText> {activeItem.title} </ItemText>
                </MenuItemLeft>
                <MenuItemRight>
                    <img style={ ! toggle ? {transform: "rotate(180deg)"} : {} } src="/images/headericons/arrow-up.svg" alt="" />
                </MenuItemRight>
            </MenuItem>
            {toggle ? <Ndropdown updateMenuItem={updateMenuItem} itemData={itemData} /> : ''}
        </ItemWrap>
  )
}

export default MenuButton