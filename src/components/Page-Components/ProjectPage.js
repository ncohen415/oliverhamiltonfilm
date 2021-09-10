import React from "react"
import styled from "styled-components"

const ProjectPageContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  font-family: "Mrs Eaves";
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
        li {
          display: flex;
          .role {
            font-size: 23px;

            margin-right: 0.2rem;
          }
          .slash {
            font-size: 23px;
          }
          .person {
            margin-left: 0.2rem;
            font-size: 23px;
            font-weight: bold;
          }
        }
      }
    }
    .title-wrapper {
      display: flex;
      justify-content: center;
      flex: 0 1 33.33333%;
      h3 {
        font-size: 35px;
        font-family: "Mrs Eaves";
      }
    }
    .format-wrapper {
      display: flex;
      flex: 0 1 33.33333%;
      justify-content: flex-end;
      align-items: baseline;
      .format-label {
        font-size: 25px;
        margin-right: 0.2rem;
      }
      .format-value {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
`

const ProjectPage = ({ project }) => {
  const projectACF = project.ProjectsACF
  console.log(projectACF.format)
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
                  <p className="role">{credit.role}</p>
                  <p className="slash">//</p>
                  <p className="person"> {credit.person} </p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="title-wrapper">
          <h3>{projectACF.title}</h3>
        </div>
        <div className="format-wrapper">
          <p className="format-label">
            {" "}
            {projectACF.format === null ? "" : "Format:"}{" "}
          </p>
          <p className="format-value">{projectACF.format}</p>
        </div>
      </div>
    </ProjectPageContainer>
  )
}

export default ProjectPage
