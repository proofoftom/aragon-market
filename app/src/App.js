import React from 'react'
import { useAppState } from '@aragon/api-react'
import { Main, Split } from '@aragon/ui'

import MarketStats from './components/MarketStats'
import Navbar from './components/Navbar'
import OpenOrders from './components/OpenOrders'
import SelectMarket from './components/SelectMarket'
import TradeHistory from './components/TradeHistory'

import styled from 'styled-components'

function App() {
  const appState = useAppState()
  const { syncing } = appState
  return (
    <Main>
      <Navbar />
      {syncing && <Syncing />}
      <SelectMarket />
      <Split
        primary={<OpenOrders />}
        secondary={
          <React.Fragment>
            <MarketStats />
            <TradeHistory />
          </React.Fragment>
        }
      />
    </Main>
  )
}

const Syncing = styled.div.attrs({ children: 'Syncing…' })`
  position: absolute;
  top: 15px;
  right: 20px;
`

export default App
