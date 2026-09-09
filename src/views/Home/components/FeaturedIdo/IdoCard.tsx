import React from "react";
import styled from 'styled-components'

import {
  Flex, Grid
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'


const CardWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  background: trasparent;
  border-radius: 20px;
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0px 15px;
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    padding: 0px 15px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0px 15px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0px 15px;
  }
`
const Card = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  background: #FFFFFF;
  border-radius: 20px 20px 0px 0px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardHeader = styled.div`
    height: 60px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const CardLogo = styled.div`
    width: 54px;
    height: 54px;
    margin-right: 15px;
    float: left;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const CardTitle = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const Title = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const TitleSpan = styled.div`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #464754;
  display: inline-block;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const SubTitle = styled.div`
    margin-top: 13px;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const SubTitleA = styled.a`
  font-family: 'GilroyHome';
  background: #f5f1eb;
  border-radius: 10px;
  padding: 5px 10px;
  text-decoration: none;
  margin-right: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #807373;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const Status = styled.span`
  font-family: 'GilroyHome';
  background: #e56060;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  margin-left: 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const Amount = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 1rem;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const AmountTitle = styled.div`
  display: inline-block;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #807373;
  padding-top: 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const AmountCount = styled.div`
  text-align: right;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const AmountCountSpan = styled.span`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #464754;
  margin-left: 6px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const AmountCountImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  top: 7px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const Progress = styled.div`
  margin-top: 15px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const ProgressInfo = styled(Grid)`
    display: grid;
    grid-template-columns: 50% 50%;
    @media (min-width: 768px) and (max-width: 1024px) {
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    }
    @media (min-width: 481px) and (max-width: 767px) {
    }
    @media (min-width: 320px) and (max-width: 480px) {
    }
`
const ProgressInfoLeft = styled.div`
  text-align: left;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #807373;

  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const ProgressInfoRight = styled.div`
  text-align: right;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.02em;
  color: #A69F9F;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const ProgressWrap = styled.div`
  margin-top: 5px;
  display: block;
  width:100%;
  height: 18px;
  background-color: #f5f1eb;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const ProgressInner = styled.div`
  background: linear-gradient(270.01deg,#c89c34 8.72%,#ffbb1c 78.42%);
  width: 50%;
  border-radius: 5px;
  padding: 0px 5px;
  text-align: right;
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterLeft = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterRight = styled.div`
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterLeftTag = styled.div`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #807373;
  padding-bottom:7px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterLeftNum = styled.div`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #464754;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterRightTag = styled.div`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 120%;
  text-align: right;
  letter-spacing: 0.02em;
  color: #807373;
  padding-bottom:7px;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const CardFooterRightNum = styled.div`
  font-weight: 700;
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const FooterEx = styled(Grid)`
  grid-template-columns: 50% 50%;
  background: #c8921126;
  border-radius: 0px 0px 20px 20px;
  padding: 1rem 2rem;

  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const FooterExLeft = styled(Grid)`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #807373;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`
const FooterExRight = styled(Grid)`
  font-family: 'GilroyHome';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: #C89211;
  
  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  }
  @media (min-width: 481px) and (max-width: 767px) {
  }
  @media (min-width: 320px) and (max-width: 480px) {
  }
`

const IdoCard = ()=>{
    const { t } = useTranslation();
    return (
        <CardWrap>
            <Card>
                <CardHeader>
                    <CardLogo>
                        <img style={{
                              width: '55px',
                              height: '55px',
                              borderRadius: '50%'
                        }} src="images/home/imgnew/idologo.png" alt="" />
                    </CardLogo>
                    <CardTitle>
                        <Title>
                            <TitleSpan>Roburna</TitleSpan>
                            <Status>Private</Status>
                        </Title>
                        <SubTitle>
                            <SubTitleA href="/"> Block Chain</SubTitleA>
                            <SubTitleA href="/"> Defi</SubTitleA>
                        </SubTitle>
                    </CardTitle>
                </CardHeader>
                <Amount>
                    <AmountTitle>Amount</AmountTitle>
                    <AmountCount>
                        <AmountCountImg src="images/home/imgnew/idologo.png" alt="" />
                        <AmountCountSpan> 200000 </AmountCountSpan>
                    </AmountCount>
                </Amount> 
                <Progress>
                    <ProgressInfo>
                        <ProgressInfoLeft> Remaining </ProgressInfoLeft>
                        <ProgressInfoRight> 158,000 </ProgressInfoRight>
                    </ProgressInfo>
                    <ProgressWrap>
                        <ProgressInner> 50% </ProgressInner>
                    </ProgressWrap>
                </Progress> 
                <CardFooter>
                    <CardFooterLeft>
                        <CardFooterLeftTag> Selected Addr. </CardFooterLeftTag>
                        <CardFooterLeftNum>70</CardFooterLeftNum>
                    </CardFooterLeft>
                    <CardFooterRight>
                        <CardFooterRightTag> Participants </CardFooterRightTag>
                        <CardFooterRightNum>70</CardFooterRightNum>
                    </CardFooterRight>
                </CardFooter> 
            </Card>
            <FooterEx>
              <FooterExLeft>Ends in</FooterExLeft>
              <FooterExRight>02h : 45Min : 40s</FooterExRight>
            </FooterEx>
        </CardWrap>
    );
}

export default IdoCard;
