import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { media } from "../mq"
import { Squash as Hamburger } from "hamburger-react"

//Components
import MenuItemLeft from "./menu-item-left"
import MenuItemRight from "./menu-item-right"
import MenuOverlay from "./menu-overlay"

const HeaderContainer = styled.header`
  width: 100%;
  height: 125px;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 500;
  max-width: 100vw;
  .menu-inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem 0 3rem;
    .menu-left-wrapper {
      display: none;
      ${media.smallMedium`display: block;`}
      ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li {
          opacity: 1;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    .menu-image-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      ${media.smallMedium`flex-direction: column;`}
      .hamburger {
        display: block;
        ${media.smallMedium`display: none;`}
      }
      .gatsby-image-wrapper {
        max-width: 250px;
        margin: 0 0 1rem 0;
        ${media.smallMedium`margin: 0;`}
      }
    }
    .menu-right-wrapper {
      display: none;
      ${media.smallMedium`display: block;`}
      ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li {
          opacity: 1;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`

const Header = () => {
  const [menuLeft, setMenuLeft] = useState([])
  const [menuRight, setMenuRight] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wpMenu(name: { eq: "Main Menu" }) {
        menuItems {
          nodes {
            url
            label
          }
        }
      }
      wpMediaItem(title: { eq: "oliver-hamilton" }) {
        localFile {
          childImageSharp {
            gatsbyImageData(
              formats: WEBP
              layout: CONSTRAINED
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  `)

  useEffect(() => {
    let menu = data?.wpMenu?.menuItems?.nodes
    let menuLeft = []
    let menuRight = []

    if (menu[0] && menu[1]) {
      menuLeft.push(menu[1], menu[2])
      setMenuLeft(menuLeft)
    }
    if (menu[2] && menu[3]) {
      menuRight.push(menu[3], menu[4])
      setMenuRight(menuRight)
    }
  }, [])

  const menu = data?.wpMenu?.menuItems?.nodes
  const centerImage = data?.wpMediaItem?.localFile
  return (
    <HeaderContainer>
      <MenuOverlay menu={menu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div class="menu-inner-wrapper">
        <div class="menu-left-wrapper">
          <ul>
            {menuLeft.map(menuItem => {
              return (
                <MenuItemLeft menuItem={menuItem}>
                  {menuItem.label}
                </MenuItemLeft>
              )
            })}
          </ul>
        </div>
        <div class="menu-image-wrapper">
          <Link to="/">
            <GatsbyImage image={getImage(centerImage)} alt="Oliver Hamilton" />
          </Link>
          <div className="hamburger">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>
        <div class="menu-right-wrapper">
          <ul>
            {menuRight.map(menuItem => {
              return (
                <MenuItemRight menuItem={menuItem}>
                  {menuItem.label}
                </MenuItemRight>
              )
            })}
          </ul>
        </div>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
