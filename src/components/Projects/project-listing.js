import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

//COMPONENTS
import Project from "./project"

const ProjectListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ProjectListing = () => {
  const data = useStaticQuery(graphql`
    {
      allWpProject {
        edges {
          node {
            slug
            ProjectsACF {
              title
              videoGenre
              thumbnailMedia {
                projectVideoPreviewMp4
                projectVideoPreviewWebm
                projectThumbnailImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        formats: WEBP
                        layout: CONSTRAINED
                        placeholder: BLURRED
                        quality: 100
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projectsACF = data.allWpProject.edges

  return (
    <ProjectListingContainer>
      {projectsACF.map(project => {
        return <Project project={project} />
      })}
    </ProjectListingContainer>
  )
}

export default ProjectListing
