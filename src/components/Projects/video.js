import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'


const VideoContainer = styled.div`
  display: flex;
  flex: 2 1 33.3333333333333333%;
  margin: 0.2rem;
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
      position: relative;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      visibility: hidden;
      &.hovered {
          opacity: 1;
          visibility: visible;
        }
    }
  }
`

const Video = ({ media, index, hover, setHover, project }) => {
  const [restart, setRestart] = useState([])

  const handleMouseLeave = () => {
    setHover(null)
    setRestart(!restart)
  }

  const handleMouseOver = () => {
    setHover(index)
    setRestart(!restart)
  }
  return (
    <VideoContainer
      key={index}
      onMouseOver={e => handleMouseOver()}
      onMouseLeave={e => handleMouseLeave()}
      className={hover === index ? "hovered" : ""}
    >
      <Link to={`/project/${project.node.slug}`}>
        <div
          className={
            hover === index ? "image-wrapper hovered" : "image-wrapper"
          }
        >
          <GatsbyImage
            image={getImage(media?.projectThumbnailImage?.localFile)}
            alt="Preview Image"
          />
        </div>
        {media.projectVideoPreviewWebm === null ? (
          <div className="image-wrapper">
            <GatsbyImage
              image={getImage(media?.projectThumbnailImage?.localFile)}
              alt="Preview Image"
            />
          </div>
        ) : (
          <div className={
            hover === index ? "video-wrapper hovered" : "video-wrapper"
          }>
            <div style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: "10",

            }}/>
            <ReactPlayer
              url={media?.projectVideoVimeoLink}
              muted={true}
              loop={true}
              playing={true}
              width={"100%"}

            />

          </div>
        )}
      </Link>
    </VideoContainer>
  )
}

export default Video
