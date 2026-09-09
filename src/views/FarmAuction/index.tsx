import React from 'react'
import styled from 'styled-components'
import { Flex } from '@arborswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import PageHeader from 'components/PageHeader'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
// import FAQs from './components/FAQs'
import AuctionDetails from './components/AuctionDetailsCard'
import AuctionLeaderboard from './components/AuctionLeaderboard'
// import { FORM_ADDRESS } from './helpers'
import { useCurrentFarmAuction } from './hooks/useCurrentFarmAuction'
import AuctionTimer from './components/AuctionTimer'
import ReclaimBidCard from './components/ReclaimBidCard'
// import NotWhitelistedNotice from './components/NotWhitelistedNotice'
import CongratulationsCard from './components/CongratulationsCard'
// import AuctionCakeBurn from './components/AuctionCakeBurn'

const StyledHeader = styled(PageHeader)`
  max-height: max-content;
  margin-bottom: -40px;
  padding-bottom: 40px;
  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 600px;
  }
`

const Left = styled(Flex)`
  flex-direction: column;
  flex: 1;
`

const Right = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex: 0.5;
  & img {
    height: 50%;
    width: 50%;
    max-height: 330px;
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & img {
      height: auto;
      width: auto;
    }
  }
`

const AuctionContainer = styled(Flex)`
  width: 100%;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 24px;
  }
`

const FarmAuction = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const { currentAuction, bidders, connectedBidder, refreshBidders } = useCurrentFarmAuction(account)

  return (
    <>
      <>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          background={theme.colors.bgDark}
          p="24px 0"
          index={2}
          concaveDivider
          dividerPosition="top"
        >
          <AuctionTimer auction={currentAuction} />
          <AuctionContainer flexDirection={['column', null, null, 'row']}>
            <Flex flex="1" flexDirection="column" width="100%" minWidth="288px">
              <AuctionDetails
                auction={currentAuction}
                connectedBidder={connectedBidder}
                refreshBidders={refreshBidders}
              />
              {connectedBidder?.isWhitelisted && bidders && currentAuction && (
                <CongratulationsCard currentAuction={currentAuction} bidders={bidders} />
              )}
              {connectedBidder?.isWhitelisted && <ReclaimBidCard />}
            </Flex>
            <AuctionLeaderboard auction={currentAuction} bidders={bidders} />
          </AuctionContainer>
        </PageSection>
      </>
    </>
  )
}

export default FarmAuction
