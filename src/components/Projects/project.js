import React, { useState } from "react"
import styled from "styled-components"
import Video from "./video"
import { media } from "../mq"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 27vh;
  margin-bottom: 4rem;
  ${media.small`height: 37vh; margin-bottom: 2rem;`}
  ${media.smallMedium`height: 37vh; margin-bottom: 0;`}
  ${media.medium`margin-bottom: 2rem;`}
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
    font-size: 20px;
    text-align: center;
    ${media.smallMedium`font-size: 1em;`}
  }
`

const Project = ({ project }) => {
  const [hover, setHover] = useState(null)
  const ACF = project.node.ProjectsACF

  console.log(ACF)
  return (
    <ProjectContainer>
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
      <div className="title">
        <h3>{ACF.title}</h3>
      </div>
    </ProjectContainer>
  )
}

export default Project
