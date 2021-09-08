import React from "react"
import styled from "styled-components"

const ProjectPageContainer = styled.div`
  height: 100%;
  width: 100%;
  .video-wrapper {
    margin: 0 0 2rem 0;
  }
  .title-wrapper {
  }
  .stills-wrapper {
  }
`

const ProjectPage = ({ project }) => {
  const projectACF = project.ProjectsACF
  console.log(project)
  return (
    <ProjectPageContainer>
      <div
        className="video-wrapper"
        dangerouslySetInnerHTML={{ __html: projectACF.videoEmbed }}
      />

      <div className="title-wrapper">
        <h3>{projectACF.title}</h3>
      </div>
      <div className="stills-wrapper"></div>
    </ProjectPageContainer>
  )
}

export default ProjectPage
