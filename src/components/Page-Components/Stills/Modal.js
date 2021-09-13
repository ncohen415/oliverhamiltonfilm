import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Close from "../../../images/close.svg"
import { media } from "../../mq"

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
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${media.smallMedium`max-width: 45%; max-height: 50%;`}
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

const Modal = ({ still, modalImage, setIsModalActive }) => {
  const handleCloseModal = () => {
    setIsModalActive(false)
  }
  return (
    <ImageModal onClick={e => handleCloseModal()}>
      <div className="image-wrapper">
        <GatsbyImage image={getImage(modalImage)} />
      </div>
      <button onClick={e => handleCloseModal()} className="close">
        <img src={Close} alt="Close" />
      </button>
    </ImageModal>
  )
}

export default Modal
