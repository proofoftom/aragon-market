import React from 'react'
import { DataView } from '@aragon/ui'

function TradeHistory() {
  return (
    <DataView
      heading="Trade History"
      fields={['Price', 'Amount', 'Time']}
      entries={[
        ['$214.19', '20.00', '07/18 18:13'],
        ['$213.51', '6.00', '07/18 18:12'],
        ['$212.03', '7.27', '07/18 18:11'],
        ['$213.19', '20.00', '07/18 18:09'],
        ['$214.51', '6.00', '07/18 18:08'],
        ['$212.03', '87.67', '07/18 18:04'],
      ]}
      renderEntry={entry => [...entry]}
    />
  )
}

export default TradeHistory
