import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MobileStillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  visibility: visible;
  opacity: 1;
  transition: 0.3s ease-in-out;
  width: 100%;
  height: 100%;
`

const MobileStill = ({ media, project }) => {
  return (
    <MobileStillContainer>
      <Link to={`/project/${project.node.slug}`}>
        <GatsbyImage
          image={getImage(media?.projectThumbnailImage?.localFile)}
          alt="Preview Image"
        />
      </Link>
    </MobileStillContainer>
  )
}

export default MobileStill
