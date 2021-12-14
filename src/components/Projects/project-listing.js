import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Scroll from "./Scroll"

//COMPONENTS
import Project from "./project"
import LoadingProject from "./LoadingProject"

const ProjectListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 4rem;
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
                projectVideoVimeoLink
                projectThumbnailImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        formats: JPG
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
    const projects = data?.allWpProject?.edges
    const sortedProjects = projects?.sort(
      (a, b) => a.node?.ProjectsACF?.order - b.node?.ProjectsACF?.order
    )
    if(sortedProjects){
      setOrderedProjects(sortedProjects)
    }
  }, [])

  const projectsACF = data.allWpProject.edges
  console.log(document.readyState)

  const stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
    }
  }, 10000);
  
  return (
    <ProjectListingContainer>
      {
        stateCheck ? 
        <Scroll
          projects={orderedProjects}
        />
        : 
        <LoadingProject/>
      }
    </ProjectListingContainer>
  )
}

export default ProjectListing
