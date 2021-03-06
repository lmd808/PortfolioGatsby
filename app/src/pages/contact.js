import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import EmailLogic from '../components/emailLogic'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Contact = ({ className, location }) => {
  const title = "Contact"
  const { keywords} = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('cover1.png')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
            <Row>
            <Col>
                <EmailLogic/>
            </Col>
            
            </Row>   
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Contact)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

`
