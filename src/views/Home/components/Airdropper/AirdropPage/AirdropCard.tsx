
import { formatUnits } from "ethers/lib/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import {
  Flex, Grid
} from '@arborswap/uikit'
import { useTranslation } from 'contexts/Localization'

import { getPublicAirdropsInfos } from "../../../utils/getAirdropList";

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
const SubTitleSpan = styled.a`
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

export default function AirdropCard({ data, status,  privateCard }) {
  const [numberOfClaims, setNumberOfclaims] = useState(0)
  if (privateCard === false) {
    (async () => {
      try {

        const publicAirdropInfos = await getPublicAirdropsInfos([data.address]);
        const numberOfClaimsNum:any = formatUnits(publicAirdropInfos.data[0][1], 0)
        setNumberOfclaims(numberOfClaimsNum)
      } catch (error) {
        // Handle the error
      }
    })();
  }

  const totalAmount = Number(formatUnits(data.info.totalAmountToAirdrop, 18));
  const tags = data.info.description[2].split(",");

  const totalDistributed = Number(
    formatUnits(data.info.totalAmountDistributed, 18)
  );
  const remaining = totalAmount - totalDistributed;
  let filledPerc:any = '';
  filledPerc = (remaining / totalAmount) * 100;

  if (totalAmount === 0) {
    filledPerc = "NotStartedYet";
  }

  const airdropBase = 'https://airdrop.arborswap.org'

  return (
      
      <Link to={{pathname: `${airdropBase}/airdropper/airdrops/${data.address}` }} target="_blank" >
          <CardWrap>
            <Card>
                <CardHeader>
                    <CardLogo>
                        <img
                        
                          src={data.info.description[0]}
                          alt={data.info.logoImage}
                          style={{
                                width: '55px',
                                height: '55px',
                                borderRadius: '50%'
                          }}
                        />

                    </CardLogo>
                    <CardTitle>
                        <Title>
                            <TitleSpan>{data.info.description[7]}</TitleSpan>
                            {
                              privateCard ? (
                                 <Status>Private</Status>
                              ) : (
                                 <Status>Public</Status>
                              )
                          }
                        </Title>
                        <SubTitle>
                            {tags.map((tag,index) => (
                              tag !== '' &&
                              // eslint-disable-next-line react/no-array-index-key
                              <SubTitleSpan key={index+tag} > {tag} </SubTitleSpan>
                            ))}
                        </SubTitle>
                    </CardTitle>
                </CardHeader>
                <Amount>
                    <AmountTitle>Amount</AmountTitle>
                    <AmountCount>
                        <AmountCountImg src={data.info.description[0]} alt="" />
                        <AmountCountSpan> {totalAmount.toLocaleString()} </AmountCountSpan>
                    </AmountCount>
                </Amount> 
                <Progress>
                    <ProgressInfo>
                        <ProgressInfoLeft> Remaining </ProgressInfoLeft>
                        <ProgressInfoRight> {remaining.toLocaleString()} {data.token} </ProgressInfoRight>
                    </ProgressInfo>
                    <ProgressWrap>
                      {totalAmount !== 0 ? (

                        <ProgressInner className={`h-18px ${
                          status === 2 ? "filled-ended" : "filled"
                        }  rounded-[5px] pr-2 flex justify-end items-center text-xs text-white`}
                        style={{ width: `${Math.floor(filledPerc)}%` }}  > {Math.floor(filledPerc)}% </ProgressInner>
                      ) : (
                          <ProgressInner className={`h-18px ${
                            status === 2 ? "filled-ended" : "filled"
                          }  rounded-[5px] pr-2 flex justify-end items-center text-xs text-white`}
                          style={{ width: `0px` }}  > Not Started yet </ProgressInner>
                      )}
                      </ProgressWrap>
                  </Progress> 
                  <CardFooter>
                  { privateCard ? (<>
                      <CardFooterLeft>
                        <CardFooterLeftTag> Selected Addr. </CardFooterLeftTag>
                          <CardFooterLeftNum>{data.info.numberWLAddresses.toNumber()}</CardFooterLeftNum>
                      </CardFooterLeft>
                      <CardFooterRight>
                          <CardFooterRightTag> Participants </CardFooterRightTag>
                          <CardFooterRightNum> {data.info.numberOfParticipants.toNumber()} </CardFooterRightNum>
                      </CardFooterRight>
                    </> ) :(<>
                      <CardFooterLeft>
                        <CardFooterLeftTag> Number Of Claims. </CardFooterLeftTag>
                          <CardFooterLeftNum> {Math.floor(numberOfClaims)} </CardFooterLeftNum>
                      </CardFooterLeft>
                      <CardFooterRight>
                          <CardFooterRightTag> Participants </CardFooterRightTag>
                          <CardFooterRightNum> {data.info.numberOfParticipants.toNumber()} </CardFooterRightNum>
                      </CardFooterRight>
                </>)}
                </CardFooter> 
            </Card>
            {/* <FooterEx>
              <FooterExLeft>Ends in</FooterExLeft>
              <FooterExRight>02h : 45Min : 40s</FooterExRight>
            </FooterEx> */}
        </CardWrap>
      </Link>
  );
}
