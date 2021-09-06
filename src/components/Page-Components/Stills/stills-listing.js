import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Close from "../../../images/close.svg"
import Modal from "./Modal"

const StillsListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .wrapper {
    cursor: pointer;
    flex: 0 1 33%;
    margin: 0.15rem;
    transition: 0.15s ease-in-out;
    opacity: 1;
    overflow: hidden;
    max-height: 30vh;
    &.hovered {
      opacity: 0.8;
    }
  }
`

// const Modal = styled.button`
//   display: none;
//   position: fixed;
//   z-index: 10;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   overflow: auto;
//   border: none;
//   background-color: rgba(255, 255, 255, 0.8);
//   cursor: pointer;
//   &.clicked {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     .gatsby-image-wrapper {
//       flex: 0 1 75%;
//     }
//   }
//   .close {
//     position: absolute;
//     right: 5%;
//     top: 5%;
//     background: none;
//     color: inherit;
//     border: none;
//     padding: 0;
//     font: inherit;
//     cursor: pointer;
//     outline: inherit;
//     img {
//       opacity: 0.9;
//     }
//   }
// `

const StillsListing = ({ stills }) => {
  const [hover, setHover] = useState(null)
  const [clicked, setClicked] = useState(false)
  return (
    <StillsListingContainer>
      {stills.map((still, index) => {
        return (
          <div
            onMouseOver={e => setHover(index)}
            onMouseLeave={e => setHover(null)}
            className={
              hover === index && clicked === false
                ? "wrapper hovered"
                : "wrapper"
            }
          >
            <GatsbyImage
              key={index}
              onClick={e => setClicked(true)}
              image={getImage(still.photos.localFile)}
            />
            <Modal still={still} clicked={clicked} setClicked={setClicked} />
          </div>
        )
      })}
    </StillsListingContainer>
  )
}

export default StillsListing
