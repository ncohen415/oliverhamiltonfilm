import React from "react"
require("./src/components/layout.css")

//Components
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
