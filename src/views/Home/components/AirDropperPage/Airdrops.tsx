import React, { useState, useEffect } from 'react'
import CircleLoader from 'components/Loader/CircleLoader'
import styled from 'styled-components'
import { getAirdropList, getAirdropInfos, sortAirdrops, getPublicAirdrops } from '../../utils/getAirdropList'
import AirdropsBase from '../Airdropper/Airdrops'
import { useDocumentTitle } from '../../hooks/setDocumentTitle'

const Tabs = [
  {
    id: 1,
    tabName: 'Live',
  },
  {
    id: 2,
    tabName: 'Upcoming',
  },
  {
    id: 3,
    tabName: 'Ended',
  },
]

const LoaderWrap = styled.div`
  text-align:center;
`

export default function Airdrops() {
  useDocumentTitle('Airdrops')

  const [ready, setReady] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [endedList, setEndedList] = useState([])
  const [timedList, setTimedList] = useState([])
  const [liveList, setLiveList] = useState([])
  const [publicList, setPublicList] = useState([])
  const [loader, setLoader] = useState(true)

  const handleFetch = async () => {
    setReady(false)
    try {
      const airdrops = await getAirdropList()
      const publicAirdrops = await getPublicAirdrops(airdrops.data)
      const sortedAirdrops = await sortAirdrops(airdrops.data)
      // eslint-disable-next-line prefer-destructuring
      const timed = sortedAirdrops.data.timed;
      // eslint-disable-next-line prefer-destructuring
      const live = sortedAirdrops.data.live;
      // eslint-disable-next-line prefer-destructuring
      const ended = sortedAirdrops.data.ended;
      
      if (publicAirdrops.success) {
        setPublicList(publicAirdrops.data)
      }
      
      if (airdrops.success) {
        const infoTimed = await getAirdropInfos(timed)
        const infoLive = await getAirdropInfos(live)
        const infoEnded = await getAirdropInfos(ended)

        if (infoTimed.success) {
          setTimedList(infoTimed.data)
        }

        if (infoLive.success) {
          setLiveList(infoLive.data)
        }

        if (infoEnded.success) {
          setEndedList(infoEnded.data)
        }
        setLoader(false)
      }
      setReady(true)

    // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  useEffect(() => {
    handleFetch()
  }, [])


  return (
    loader ? <LoaderWrap><CircleLoader size="30px" /></LoaderWrap>
      :
      <AirdropsBase publicList={publicList} timedList={timedList} endedList={endedList} liveList={liveList} activeTab={activeTab} />
  )
}
