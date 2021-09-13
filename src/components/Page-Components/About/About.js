import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { media } from "../../mq"
import Slider from "react-slick"
import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"

const AboutPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  ${media.medium`flex-direction: row; justify-content: space-between;`}
  .image-wrapper {
    flex: 0 1 48%;
    margin: 0 0 3rem 0;
    padding: 0;
    ${media.medium`margin: 0; padding: 0 1rem 0 0; max-width: 40%;`}
    .slick-slider {
      height: 100%;
      width: 100%;
      display: flex;
      button {
        display: none !important;
      }
      .slick-list {
        max-width: 100vw;
        overflow: hidden;
        .slick-track {
          height: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  .blurb-wrapper {
    flex: 0 1 48%;
    padding: 0;
    text-align: center;
    ${media.medium`margin: 0; padding: 0 1rem 0 0; text-align: left;`}
    h3 {
      font-family: "Mrs Eaves Roman Lining";
    }
    p {
      font-family: "Mrs Eaves Roman Lining";
      font-size: 25px;
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      wpPage(title: { eq: "About" }) {
        AboutACF {
          aboutPageBlurb
          aboutPageImages {
            aboutPageImage {
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

  const aboutACF = data.wpPage.AboutACF

  let settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    infinite: true,
    pauseOnHover: false,
  }

  return (
    <AboutPageContainer>
      <div className="image-wrapper">
        <Slider {...settings}>
          {aboutACF?.aboutPageImages?.map((image, index) => {
            return (
              <GatsbyImage
                alt="Oliver On Set"
                key={index}
                image={getImage(image.aboutPageImage.localFile)}
              />
            )
          })}
        </Slider>
      </div>
      <div className="blurb-wrapper">
        <h3>About Oliver Hamilton</h3>
        <p dangerouslySetInnerHTML={{ __html: aboutACF.aboutPageBlurb }} />
      </div>
    </AboutPageContainer>
  )
}

export default About
