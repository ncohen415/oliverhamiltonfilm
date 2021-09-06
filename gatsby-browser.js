import React from "react"

//Components
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
