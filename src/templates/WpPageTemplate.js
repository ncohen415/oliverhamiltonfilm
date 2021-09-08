import React from "react"
import { graphql } from "gatsby"
import Reel from "../components/Page-Components/Reel/Reel"
import Stills from "../components/Page-Components/Stills/Stills"
import About from "../components/Page-Components/About/About"
import Contact from "../components/Page-Components/Contact/Contact"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  if (page.slug === "reel") {
    return <Reel />
  } else if (page.slug === "stills") {
    return <Stills />
  } else if (page.slug === "about") {
    return <About />
  } else if (page.slug === "contact") {
    return <Contact />
  }
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page?.title }} />
      <div dangerouslySetInnerHTML={{ __html: page?.content }} />
    </>
  )
}

export const data = graphql`
  query WpPageQuery($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`

export default WpPageTemplate
