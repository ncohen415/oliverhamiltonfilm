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
    hr {
      width: 18%;
      margin: auto auto calc(1.45rem - 1px) auto;
      ${media.smallMedium`margin:0 0 calc(1.45rem - 1px) 0;`}
    }
    .title-wrapper {
      display: flex;
      justify-content: center;
      ${media.smallMedium`justify-content: flex-start;`}
      h3 {
        font-size: 55px;
        font-weight: 400;
        font-family: "Mrs Eaves All Caps";
        margin: 0 0 0.5rem 0;
        text-align: center;
        ${media.smallMedium`text-align: left;`}
      }
    }
    .credits {
      display: flex;
      flex: 0 1 33.33333%;
      justify-content: flex-start;
      font-family: "Mrs Eaves All Caps";
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: -0.33rem 0 0 0;
        list-style: none;
        ${media.smallMedium`align-items:baseline; flex-direction: column;`}
        li {
          display: flex;
          margin: 0;
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
          }
        }
      }
    }

    .format-wrapper {
      display: flex;
      justify-content: center;
      font-family: "Mrs Eaves All Caps";
      margin: -0.5rem 0 -0.2rem 0;
      ${media.smallMedium`justify-content: flex-start;`}
      .format-label {
        font-size: 25px;
        margin-right: 0.2rem;
      }
      .format-value {
        font-size: 25px;
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
        <div className="title-wrapper">
          <h3>{projectACF.title}</h3>
        </div>
        <hr />
        {projectACF.format === null ? (
          ""
        ) : (
          <>
            <div className="format-wrapper">
              <p className="format-label">
                {" "}
                {projectACF.format === null ? "" : "Format:"}{" "}
              </p>
              <p className="format-value">{projectACF.format}</p>
            </div>
            <hr />
          </>
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
      </div>
    </ProjectPageContainer>
  )
}

export default ProjectPage
