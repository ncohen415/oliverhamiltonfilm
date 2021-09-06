import React from "react"
import StillsListing from "./stills-listing"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StillsPageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Stills = () => {
  const data = useStaticQuery(graphql`
    query StillsPageQuery {
      wpPage(title: { eq: "Stills" }) {
        StillsACF {
          stills {
            photos {
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
  `)
  const stills = data?.wpPage?.StillsACF?.stills
  return (
    <StillsPageContainer>
      <StillsListing stills={stills} />
    </StillsPageContainer>
  )
}

export default Stills
