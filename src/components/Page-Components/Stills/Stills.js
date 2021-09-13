import React, { useState } from "react"
import StillsListing from "./stills-listing"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Modal from "./Modal"
import SEO from "../../seo"

const StillsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  &.open {
    position: fixed;
  }
`

const Stills = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const [modalImage, setModalImage] = useState({})

  const data = useStaticQuery(graphql`
    query StillsPageQuery {
      wpPage(title: { eq: "Stills" }) {
        StillsACF {
          stills {
            photos {
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
  `)
  const stills = data?.wpPage?.StillsACF?.stills
  return (
    <StillsPageContainer className={isModalActive === true ? "open" : ""}>
      <SEO title="Stills" />
      <StillsListing
        setIsModalActive={setIsModalActive}
        setModalImage={setModalImage}
        stills={stills}
      />
      {isModalActive && (
        <Modal modalImage={modalImage} setIsModalActive={setIsModalActive} />
      )}
    </StillsPageContainer>
  )
}

export default Stills
