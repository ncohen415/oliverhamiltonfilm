import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { media } from "../../mq"
import SEO from "../../seo"

const ReelPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin-top: 3rem;
  ${media.large`margin-top: 0; padding: 0 5% 5% 5%;`}
  .reel-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
`

const Reel = () => {
  const data = useStaticQuery(graphql`
    query ReelPageQuery {
      wpPage(title: { eq: "Reel" }) {
        ReelACF {
          reelEmbed
        }
      }
    }
  `)
  const ReelACF = data?.wpPage?.ReelACF
  return (
    <ReelPageContainer>
      <SEO title="Reel" />
      <div
        className="reel-container"
        dangerouslySetInnerHTML={{ __html: ReelACF.reelEmbed }}
      />
    </ReelPageContainer>
  )
}

export default Reel
