import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuItemRightContainer = styled.li`
  margin: 0 0 0 3rem;
  padding: 0;
  a {
    text-decoration: none;
    color: black;
    font-size: 30px;
  }
`

const MenuItemRight = ({ menuItem }) => {
  return (
    <MenuItemRightContainer>
      <Link to={menuItem.url}>{menuItem.label}</Link>
    </MenuItemRightContainer>
  )
}

export default MenuItemRight
