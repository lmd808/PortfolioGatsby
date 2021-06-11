import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Email from '../components/email'
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
        heroImg={withPrefix('/images/cover1.png')}
        title={title}
      />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
            <Row>
            <Col>
                <Email/>
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
