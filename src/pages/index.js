import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Kv from "../components/kv"
import BlogItem from "../components/blogitem"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              data
              title
                thumbnail {
                  childImageSharp {
                    fluid {
                      src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log('data', data)
  return (
    <Layout>
      <Kv />
      <Container>
        <Row>
          {
            data.allMarkdownRemark.edges.map((edge, index) => (
            <Col sm={4} key={index}>
              <BlogItem
                title={edge.node.frontmatter.title}
                data={edge.node.frontmatter.data}
                src={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
            </Col>
            ))
          }
          
        </Row>
      </Container>
    </Layout>
  )
}  

export default IndexPage