import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FullMenuItemWrapper = styled.li`
  margin: 1rem;
  padding: 0;
  a {
    color: black;
    text-decoration: none;
    font-size: 30px;
  }
`

const FullMenuItem = ({ menuItem, setIsOpen }) => {
  return (
    <FullMenuItemWrapper>
      <Link onClick={e => setIsOpen(false)} to={menuItem.url}>
        {menuItem.label}
      </Link>
    </FullMenuItemWrapper>
  )
}

export default FullMenuItem
