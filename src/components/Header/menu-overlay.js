import React from "react"
import styled from "styled-components"

//Components
import FullMenu from "./full-menu"
import Close from "../../images/close.svg"

const Overlay = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  display: flex;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: -1;
  position: fixed;
  transition: all 0.1s ease-in-out;
  overflow: hidden;
  z-index: 1000;
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    img {
      position: absolute;
      right: 5%;
      top: 5%;
    }
  }
`

const MenuOverlay = ({ setIsOpen, isOpen, menu }) => {
  return (
    <>
      {isOpen && (
        <Overlay onClick={e => setIsOpen(false)}>
          <button onClick={e => setIsOpen(false)}>
            <img src={Close} alt="Close" />
          </button>
          <FullMenu setIsOpen={setIsOpen} menu={menu} />
        </Overlay>
      )}
    </>
  )
}

export default MenuOverlay
