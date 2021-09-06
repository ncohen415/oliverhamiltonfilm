import React from "react"
import styled from "styled-components"

const ProjectPageContainer = styled.div`
  height: 100%;
  width: 100%;
  .video-wrapper {
    display: flex;
    width: 100%;
    height: 60vh;
    background-color: black;
  }
  .title-wrapper {
    height: 10vh;
    width: 100%;
    background-color: green;
  }
  .stills-wrapper {
    height: 40vh;
    width: 100%;
    background-color: red;
  }
`

const ProjectPage = ({ project }) => {
  console.log(project)
  return (
    <ProjectPageContainer>
      <div className="video-wrapper"></div>
      <div className="title-wrapper"></div>
      <div className="stills-wrapper"></div>
    </ProjectPageContainer>
  )
}

export default ProjectPage
