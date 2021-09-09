import React from "react"
import styled from "styled-components"

const ProjectPageContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  .video-wrapper {
    margin: 0 0 2rem 0;
  }
  .description-wrapper {
    display: flex;
    justify-content: space-between;
    .credits {
      display: flex;
      flex: 0 1 33.33333%;
      justify-content: flex-start;
      ul {
        list-style: none;
        margin: 0;
      }
    }
    .title {
      display: flex;
      flex: 0 1 33.33333%;
    }
    .format {
      display: flex;
      flex: 0 1 33.33333%;
      justify-content: flex-end;
    }
  }
`

const ProjectPage = ({ project }) => {
  const projectACF = project.ProjectsACF
  return (
    <ProjectPageContainer>
      <div
        className="video-wrapper"
        dangerouslySetInnerHTML={{ __html: projectACF.videoEmbed }}
      />
      <div className="description-wrapper">
        <div className="credits">
          <ul>
            {projectACF.credits?.map(credit => {
              return (
                <li>
                  {credit.role} / {credit.person}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="title-wrapper">
          <h3>{projectACF.title}</h3>
        </div>
        <div className="format">
          <p>{projectACF.format}</p>
        </div>
      </div>
    </ProjectPageContainer>
  )
}

export default ProjectPage
