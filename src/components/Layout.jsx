import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from './Sidebar'

const Container = styled.div``

const Page = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'La Belle Aurore', sans-serif;
  font-size: 24px;
  position: absolute;
  left: 250px;
`

const Toptag = styled.span`
  position: absolute;
  top: 16px;
  opacity: 0.6;
`

const Bottomtags = styled.span`
  position: absolute;
  bottom: 40px;
  opacity: 0.6;
`

const Bottomhtmltag = styled.span`
  position: absolute;
  left: -50px;
`

const Layout = () => {
  return (
    <Container>
        <Sidebar />

        <Page>

          <Toptag>&lt;body&gt;</Toptag>

          <Outlet />

          <Bottomtags>
            &lt;/body&gt;
            <br />
            <Bottomhtmltag>&lt;/html&gt;</Bottomhtmltag>
          </Bottomtags>
        </Page>
    </Container>
  )
}

export default Layout