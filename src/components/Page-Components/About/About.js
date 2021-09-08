import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { media } from "../../mq"

const AboutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  ${media.medium`flex-direction: row;`}
  .image-wrapper {
    flex: 0 1 50%;
    margin: 0 0 3rem 0;
    padding: 0;
    ${media.medium`margin: 0; padding: 0 1rem 0 0;`}
  }
  .blurb-wrapper {
    flex: 0 1 50%;
    padding: 0;
    text-align: center;
    ${media.medium`margin: 0; padding: 0 1rem 0 0; text-align: left;`}
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      wpPage(title: { eq: "About" }) {
        AboutACF {
          aboutPageBlurb
          aboutPageImage {
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
  `)

  const aboutACF = data.wpPage.AboutACF
  return (
    <AboutPageContainer>
      <div className="image-wrapper">
        <GatsbyImage image={getImage(aboutACF.aboutPageImage.localFile)} />
      </div>
      <div className="blurb-wrapper">
        <h3>About Oliver Hamilton</h3>
        <p dangerouslySetInnerHTML={{ __html: aboutACF.aboutPageBlurb }} />
      </div>
    </AboutPageContainer>
  )
}

export default About
