import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./Header/header"
import "./layout.css"

const LayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0 3rem 0 3rem;
  &.open {
    position: fixed;
  }
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <LayoutContainer className={isOpen === true ? "open" : ""}>
        <main>{children}</main>
      </LayoutContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
