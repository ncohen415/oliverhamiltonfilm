import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const VideoContainer = styled(motion.div)`
  display: flex;
  flex: 2 1 33.3333333333333333%;
  padding: 0.2rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &.hovered {
    flex: 2 1 42%;
  }
  a {
    display: flex;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    .image-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: -100%;
      z-index: 1;
      visibility: visible;
      opacity: 1;
      transition: 0.3s ease-in-out;
      width: 100%;

      &.hovered {
        opacity: 0;
        visibility: hidden;
      }
    }
    .video-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      overflow: hidden;
      .thumbnail-video {
        opacity: 0;
        width: 100%;
        transition: 0.3s ease-in-out;
        z-index: 1;
        visibility: hidden;
        &.hovered {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`

const Video = ({ media, index, hover, setHover, project }) => {
  return (
    <VideoContainer
      key={index}
      onMouseOver={() => setHover(index)}
      onMouseLeave={() => setHover(null)}
      className={hover === index ? "hovered" : ""}
    >
      <Link to={`/project/${project.node.slug}`}>
        <div
          className={
            hover === index ? "image-wrapper hovered" : "image-wrapper"
          }
        >
          <GatsbyImage
            image={getImage(media.projectThumbnailImage.localFile)}
            alt="Preview Image"
          />
        </div>
        <div className="video-wrapper">
          <video
            className={
              hover === index ? "thumbnail-video hovered" : "thumbnail-video"
            }
            muted
            autoPlay
            loop
          >
            <source src={media.projectVideoPreviewMp4} type="video/mp4" />
            <source src={media.projectVideoPreviewWebm} type="video/webm" />
          </video>
        </div>
      </Link>
    </VideoContainer>
  )
}

export default Video
