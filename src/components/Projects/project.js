import React, { useState } from "react"
import styled from "styled-components"
import Video from "./video"
import { Link } from "gatsby"

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 37vh;
  .video-row {
    display: flex;
    height: 27vh;
    flex: 0 1 100%;
  }

  .title-wrapper {
    margin: 2vh 0 0 0;
    height: 10vh;
  }
`

const Project = ({ project }) => {
  const [hover, setHover] = useState(null)
  const ACF = project.node.ProjectsACF

  return (
    <ProjectContainer>
      <div className="video-row">
        {ACF.thumbnailMedia.map((media, index) => {
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
      <div className="title-wrapper">
        <h3>{ACF.title}</h3>
      </div>
    </ProjectContainer>
  )
}

export default Project
