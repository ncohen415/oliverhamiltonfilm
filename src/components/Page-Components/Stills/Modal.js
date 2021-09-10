import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Close from "../../../images/close.svg"

const ImageModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  .image-wrapper {
    height: 100%;
    width: 100%;
    max-height: 50%;
    max-width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      width: 80%;
    }
  }
  .close {
    position: absolute;
    right: 5%;
    top: 5%;
    border: none;
    padding: 0;
    background: none;
    cursor: pointer;
    outline: none;
    img {
      opacity: 0.9;
    }
  }
`

const Modal = ({
  still,
  setClicked,
  clicked,
  modalImage,
  setIsModalActive,
}) => {
  console.log(still)
  return (
    <ImageModal onClick={e => setIsModalActive(false)}>
      <div className="image-wrapper">
        <GatsbyImage image={getImage(modalImage)} />
      </div>
      <button onClick={e => setIsModalActive(false)} className="close">
        <img src={Close} alt="Close" />
      </button>
    </ImageModal>
  )
}

export default Modal
