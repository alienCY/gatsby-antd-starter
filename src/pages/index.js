import React from "react"
import Container from "../components/container"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with ant design! (antd)</p>
    <p>You can find all Ant Design components <a href="https://ant.design/components/button/">here</a></p>
    <p>Scroll down if you haven't already!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Container>
)

export default IndexPage
