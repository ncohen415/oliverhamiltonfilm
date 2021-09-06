import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

//Components
import MenuItemLeft from "./menu-item-left"
import MenuItemRight from "./menu-item-right"

const HeaderContainer = styled.header`
  width: 100%;
  height: 125px;
  background-color: #ffffff;
  .menu-inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem 0 3rem;
    .menu-left-wrapper {
      box-sizing: border-box;
      ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 0;
        padding: 0;
      }
    }
    .menu-image-wrapper {
      .gatsby-image-wrapper {
        width: 300px;
      }
    }
    .menu-right-wrapper {
      box-sizing: border-box;
      ul {
        display: flex;
        list-style: none;
        justify-content: space-between;
        margin: 0;
        padding: 0;
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allWpMenu {
        edges {
          node {
            menuItems {
              nodes {
                url
                label
              }
            }
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
  const menu = data?.allWpMenu?.edges
  const menuLeft = menu[0]?.node?.menuItems?.nodes
  const menuRight = menu[1]?.node.menuItems?.nodes
  const centerImage = data?.wpMediaItem?.localFile
  return (
    <HeaderContainer>
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
