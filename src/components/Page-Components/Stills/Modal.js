import React, { useState } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Close from "../../../images/close.svg"

const ImageModal = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  &.clicked {
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      flex: 0 1 75%;
    }
  }
  .close {
    position: absolute;
    right: 5%;
    top: 5%;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    img {
      opacity: 0.9;
    }
  }
`

const Modal = ({ still, setClicked, clicked }) => {
  console.log(still)
  return (
    <ImageModal
      onClick={e => setClicked(false)}
      className={clicked === true ? "clicked" : ""}
    >
      <GatsbyImage image={getImage(still.photos.localFile)} />
      <button onClick={e => setClicked(false)} className="close">
        <img src={Close} />
      </button>
    </ImageModal>
  )
}

export default Modal
