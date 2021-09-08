import React from "react"
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
    cursor: pointer;
    margin: 0.3rem 0.15rem 0.3rem 0.15rem;
    transition: 0.15s ease-in-out;
    opacity: 1;
    overflow: hidden;
    max-height: 30vh;
    &:hover {
      opacity: 0.8;
    }
  }
`

const StillsListing = ({ stills, setIsModalActive, setModalImage }) => {
  const handleOpenModal = still => {
    setIsModalActive(true)
    setModalImage(still)
  }
  return (
    <StillsListingContainer>
      {stills.map((still, index) => {
        return (
          <div className="wrapper">
            <GatsbyImage
              key={index}
              onClick={e => handleOpenModal(still.photos.localFile)}
              image={getImage(still.photos.localFile)}
            />
          </div>
        )
      })}
    </StillsListingContainer>
  )
}

export default StillsListing
