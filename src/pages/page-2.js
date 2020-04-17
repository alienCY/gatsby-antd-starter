import React from "react"
import Container from "../components/container"
import SEO from "../components/seo"

const SecondPage = () => (
  <Container defKey="1">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2! <br/>
      Check out on the header that blue highlight!
    </p>
  </Container>
)

export default SecondPage
