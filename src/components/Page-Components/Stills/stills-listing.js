import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { media } from "../../mq"

const StillsListingContainer = styled.div`
  display: block;
  column-count: 1;
  column-gap: 0;
  ${media.small`column-count: 2;`}
  ${media.medium`column-count: 3;`}

  .wrapper {
    margin: 0.3rem 0.15rem 0.3rem 0.15rem;
    transition: 0.15s ease-in-out;
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
    button {
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
    }
  }
`

const StillsListing = ({ stills, setIsModalActive, setModalImage }) => {
  function handleOpenModal(e, still) {
    e.preventDefault()
    setIsModalActive(true)
    setModalImage(still)
  }
  return (
    <StillsListingContainer>
      {stills.map((still, index) => {
        return (
          <div className="wrapper">
            <button onClick={e => handleOpenModal(e, still.photos.localFile)}>
              <GatsbyImage
                key={index}
                image={getImage(still?.photos?.localFile)}
              />
            </button>
          </div>
        )
      })}
    </StillsListingContainer>
  )
}

export default StillsListing
