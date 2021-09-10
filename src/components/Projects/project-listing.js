import React, { useState, useEffect } from "react"
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
    query ProjectQuery {
      allWpProject {
        edges {
          node {
            slug
            ProjectsACF {
              title
              videoEmbed
              format
              order
              credits {
                person
                role
              }
              thumbnailMedia {
                projectVideoPreviewMp4
                projectVideoPreviewWebm
                projectThumbnailImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        formats: PNG
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

  const [orderedProjects, setOrderedProjects] = useState([])

  useEffect(() => {
    let projects = data.allWpProject.edges
    let sortedProjects = projects.sort(
      (a, b) => a.node.ProjectsACF.order - b.node.ProjectsACF.order
    )

    setOrderedProjects(sortedProjects)
  }, [])
  const projectsACF = data.allWpProject.edges
  console.log("ACF", projectsACF)
  console.log("STATE", orderedProjects)
  return (
    <ProjectListingContainer>
      {orderedProjects.map(project => {
        return <Project key={project.order} project={project} />
      })}
    </ProjectListingContainer>
  )
}

export default ProjectListing
