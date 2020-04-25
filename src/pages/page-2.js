import React from "react"
import Container from "../components/container"
import SEO from "../components/seo"

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SecondPage = () => (
  <Container defKey="1">
    <SEO title="Page two" />
    <h1>Hi from the second page!</h1>
    <p>Welcome to page 2! <br/>
      Check out that blue highlight on the header! <br/>
    </p>
    <Button type="primary" icon={<SearchOutlined />}>
      Example button from readme.md
   </Button>
   <p><br/>Check out that useful button!</p>
  </Container>
)

export default SecondPage
