import React from "react"
import styled from "styled-components"

//Components
import FullMenuItem from "./full-menu-item"

const FullMenuWrapper = styled.ul`
  opacity: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: 0.2s;
`

const FullMenu = ({ menu, isOpen, setIsOpen }) => {
  return (
    <FullMenuWrapper>
      {menu.map((menuItem, index) => {
        return (
          <FullMenuItem key={index} menuItem={menuItem} setIsOpen={setIsOpen} />
        )
      })}
    </FullMenuWrapper>
  )
}

export default FullMenu
