import React, { useState } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import styled from "styled-components"
import Video from "./video"
import { media } from "../mq"
import Slider from "react-slick"
import MobileStill from "./mobile-still"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 1rem 0;
  ${media.small`margin-bottom: 2rem;`}
  ${media.smallMedium`margin-bottom: 0;`}
  ${media.medium`margin-bottom: 2rem;`}
  .mobile-wrapper {
    display: flex;
    height: 200px;
    flex: 0 1 100%;
    max-width: 100vw;
  }
  .slick-slider {
    height: 100%;
    width: 100%;
    display: flex;
    button:nth-child(1) {
      display: block !important;
      margin-left: 2rem !important;
      z-index: 1000 !important;
    }
    button:nth-child(3) {
      display: block !important;
      margin-right: 2rem !important;
      z-index: 1000 !important;
    }
    .slick-list {
      max-width: 100vw;
      overflow: hidden;
      .slick-track {
        height: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
  .video-row {
    display: flex;
    height: 27vh;
    flex: 0 1 100%;
    div:nth-child(2) {
      display: none;
      ${media.smallMedium`display: flex;`}
    }
    div:nth-child(3) {
      display: none;
      ${media.large`display: flex;`}
    }
  }
  .title {
    display: flex;
    justify-content: center;
    margin: 2vh 0 0 0;
    height: 10vh;
    text-align: center;
    ${media.smallMedium`font-size: 1em;`}
    h3 {
      font-family: "Mrs Eaves All Caps";
      font-size: 35px;
      font-weight: 100;
    }
  }
`

const Project = ({ project }) => {
  const [hover, setHover] = useState(null)
  const ACF = project.node.ProjectsACF
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }

  const size = useWindowSize()

  return (
    <ProjectContainer>
      {size?.width <= 1200 ? (
        <div className="mobile-wrapper">
          <Slider {...settings}>
            {ACF.thumbnailMedia?.map((media, index) => {
              return (
                <div>
                  <MobileStill
                    project={project}
                    key={index}
                    media={media}
                    index={index}
                    key={index}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      ) : (
        <div className="video-row">
          {ACF.thumbnailMedia?.map((media, index) => {
            return (
              <Video
                project={project}
                media={media}
                index={index}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            )
          })}
        </div>
      )}
      <div className="title">
        <h3>{ACF.title}</h3>
      </div>
    </ProjectContainer>
  )
}

export default Project
