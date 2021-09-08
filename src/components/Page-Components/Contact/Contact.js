import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import IG from "../../../images/instagram.svg"
import Vimeo from "../../../images/film.svg"
import FB from "../../../images/facebook.svg"
import { media } from "../../mq"

const ContactPageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  .headshot-wrapper {
    width: 100%;
    margin: 2rem 0 2rem 0;
    ${media.small`width: 75%;`}
    ${media.medium`width: 60%;`}
    ${media.large`width: 40%;`}
  }
  .email-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    p {
      margin-bottom: 0.5rem;
      padding: 0;
      font-weight: bold;
      font-size: 18px;
      font-family: inherit;
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: 15px;
      font-family: inherit;
    }
  }
  .socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-bottom: 0.75rem;
      padding: 0;
      font-weight: bold;
      font-size: 18px;
    }
    .socials-wrapper {
      display: flex;
      flex-direction: row;
      a {
        opacity: 1;
        transition: 0.2s ease-in-out;
        &:hover {
          opacity: 0.7;
        }
        img {
          margin: 0 0.3rem 0 0.3rem;
        }
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
      wpPage(title: { eq: "Contact" }) {
        ContactACF {
          email
          facebook
          instagram
          vimeo
          headshot {
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
  const contactACF = data?.wpPage?.ContactACF
  console.log(contactACF)

  return (
    <ContactPageContainer>
      <div className="headshot-wrapper">
        <GatsbyImage image={getImage(contactACF.headshot.localFile)} />
      </div>
      <div className="email-wrapper">
        <p>email:</p>
        <a target="_blank" href={`mailto:${contactACF.email}`}>
          {contactACF.email}
        </a>
      </div>
      <div className="socials">
        <p>socials:</p>
        <div className="socials-wrapper">
          <a href={contactACF.instagram}>
            <img src={IG} alt="Instagram" />
          </a>
          <a href={contactACF.facebook}>
            <img src={FB} alt="Facebook" />
          </a>
          <a href={contactACF.vimeo}>
            <img src={Vimeo} alt="Vimeo" />
          </a>
        </div>
      </div>
    </ContactPageContainer>
  )
}

export default Contact
