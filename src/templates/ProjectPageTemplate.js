import React from "react"
import { graphql } from "gatsby"
import ProjectPage from "../components/Page-Components/ProjectPage"

const ProjectPageTemplate = ({ data }) => {
  const project = data?.project?.edges[0].node || {}

  return (
    <>
      <ProjectPage project={project} />
    </>
  )
}

export const data = graphql`
  query ($slug: String!) {
    project: allWpProject(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          ProjectsACF {
            title
            pitchDeckLink
            videoEmbed
            format
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
`

export default ProjectPageTemplate
