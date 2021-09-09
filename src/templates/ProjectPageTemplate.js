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
            videoEmbed
            format
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
`

export default ProjectPageTemplate
