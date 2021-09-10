import React from "react"
import styled from "styled-components"
import { media } from "../mq"
import useWindowSize from "../../hooks/useWindowSize"
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
    flex-direction: column;
    justify-content: space-between;
    ${media.smallMedium`flex-direction: row;`}
    .credits {
      display: flex;
      flex: 0 1 33.33333%;
      justify-content: flex-start;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        list-style: none;
        margin: 0;
        margin-bottom: 2rem;
        ${media.smallMedium`align-items:baseline; flex-direction: column;`}
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
    .mobile-title-wrapper {
      display: flex;
      justify-content: center;
      flex: 0 1 33.33333%;
      margin-bottom: 2rem;
      h3 {
        font-size: 35px;
        font-family: "Mrs Eaves";
        text-decoration: underline;
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
      justify-content: center;
      align-items: baseline;
      ${media.smallMedium`justify-content: flex-end`}
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
  const size = useWindowSize()
  console.log(projectACF.format)
  return (
    <ProjectPageContainer>
      <div
        className="video-wrapper"
        dangerouslySetInnerHTML={{ __html: projectACF.videoEmbed }}
      />
      <div className="description-wrapper">
        {size.width <= 991 ? (
          <div className="mobile-title-wrapper">
            <h3>{projectACF.title}</h3>
          </div>
        ) : (
          ""
        )}
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
        {size.width > 991 ? (
          <div className="mobile-title-wrapper">
            <h3>{projectACF.title}</h3>
          </div>
        ) : (
          ""
        )}
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
