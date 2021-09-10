import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuItemLeftContainer = styled.li`
  margin: 0 3rem 0 0;
  padding: 0;
  a {
    text-decoration: none;
    color: black;
    font-size: 30px;
  }
`

const MenuItemLeft = ({ menuItem }) => {
  return (
    <MenuItemLeftContainer>
      <Link to={menuItem.url}>{menuItem.label}</Link>
    </MenuItemLeftContainer>
  )
}

export default MenuItemLeft
