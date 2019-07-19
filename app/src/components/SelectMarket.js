import React, { useState } from 'react'
import { Tabs } from '@aragon/ui'

function SelectMarket() {
  const [selectedMarket, setSelectedMarket] = useState(1)
  return (
    <Tabs
      items={['ANT', 'DAI', 'WETH']}
      selected={selectedMarket}
      onChange={setSelectedMarket}
    />
  )
}

export default SelectMarket
