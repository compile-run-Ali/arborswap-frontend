import React from "react";
import styled from 'styled-components'

import {
  Flex
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'
import NavigationLite from "../NavigationLite";
import ListingForm from "./ListingForm";

const Wrapper = styled(Flex)`
  font-family: GilroyHome;
  z-index: 1;
  position: relative;
  padding-top: 36px;
  min-height: 1200px;
  background: #F5F6F7;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`
const InnerWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`

const Applylisting = ()=>{
    const { t } = useTranslation();
    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <NavigationLite />
                </InnerWrapper>
                <ListingForm />
            </Wrapper>
        </>
    );
}

export default Applylisting;
