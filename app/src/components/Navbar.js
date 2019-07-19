import React from 'react'
import { useAragonApi } from '@aragon/api-react'
import { Header, Button, Badge } from '@aragon/ui'
import styled from 'styled-components'

function Navbar() {
  const { api, appState } = useAragonApi()
  const { orderNumber } = appState

  return (
    <Header
      primary={
        <React.Fragment>
          <h1 style={{ fontSize: 'x-large', display: 'inline' }}>Market</h1>
          <SpacedBadge>ACME/DAI</SpacedBadge>
        </React.Fragment>
      }
      secondary={
        <React.Fragment>
          <span style={{ paddingRight: '20px' }}>Order #{orderNumber}</span>
          <Button
            mode="strong"
            label="Create Trade"
            onClick={() => api.trade()}
          />
        </React.Fragment>
      }
    />
  )
}

const SpacedBadge = styled(Badge)`
  margin-left: 10px;
  vertical-align: super;
`

export default Navbar
