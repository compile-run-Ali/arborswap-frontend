import React, { memo } from 'react'
import { PairType, Trade } from '@arborswap/sdk'
import { Text, Flex } from '@arborswap/uikit'

export default memo(function SwapRoute({ trade }: { trade: Trade }) {
  const routeType = trade.route.pairs[0].pairType === PairType.INTERNAL ? 'Internal' : 'External'
  return (
    <Flex flexWrap="wrap" width="100%" justifyContent="flex-end" alignItems="center">
      <Text fontSize="14px" ml="0.125rem" mr="0.125rem">
        {routeType}
      </Text>
    </Flex>
  )
})
