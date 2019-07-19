import React from 'react'
import { Box, theme } from '@aragon/ui'

function MarketStats() {
  return (
    <Box>
      <div style={{ fontSize: 'medium' }}>Market Stats</div>
      <hr />
      <div>Price: $213.58</div>
      <div>Volume: 31.593 MRKT</div>
      <div>High: $214.39</div>
      <div>Low: $212.63</div>
      <div>
        24hr Change:{' '}
        <span style={{ color: theme.positive }}>+$0.06091 (2.42%)</span>
      </div>
    </Box>
  )
}

export default MarketStats
