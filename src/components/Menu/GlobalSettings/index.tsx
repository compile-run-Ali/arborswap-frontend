import React from 'react'
import { Flex, IconButton, CogIcon, useModal } from '@arborswap/uikit'
import SettingsModal from './SettingsModal'

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="primary-alt" scale="md" mr="8px">
        <CogIcon height={22} width={22} color="text" />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
