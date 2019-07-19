import React from 'react'
import { DataView, theme } from '@aragon/ui'

function OpenOrders() {
  return (
    <React.Fragment>
      <DataView
        heading={
          <h2 style={{ color: theme.negative, fontSize: 'medium' }}>Asks</h2>
        }
        fields={['Price', 'Amount', 'Total $USD']}
        entries={[
          ['$215.19', '20.00', '$4,265.45'],
          ['$214.51', '6.00', '$1,275.03'],
          ['$213.51', '6.00', '$1,175.03'],
          ['$213.03', '187.87', '$39,714.57'],
        ]}
        renderEntry={entry => [...entry]}
      />
      <DataView
        heading={
          <h2 style={{ color: theme.positive, fontSize: 'medium' }}>Bids</h2>
        }
        fields={['Price', 'Amount', 'Total $USD']}
        entries={[
          ['$212.19', '20.00', '$4,265.45'],
          ['$211.51', '6.00', '$1,275.03'],
          ['$210.51', '6.00', '$1,175.03'],
          ['$210.03', '187.87', '$39,714.57'],
        ]}
        renderEntry={entry => [...entry]}
      />
    </React.Fragment>
  )
}

export default OpenOrders
