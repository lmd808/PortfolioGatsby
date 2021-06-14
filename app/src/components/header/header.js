import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { FiSun, FiMoon } from "react-icons/fi"
import { withPrefix } from "gatsby"
import Switch from 'react-switch'
import {Link as ScrollLink} from 'react-scroll'
import siteConfig from '../../../data/siteConfig'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.secondary};
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #212121;
  a:hover {
    filter: brightness(0.6);
  }
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const HeaderLink = styled(Link)`
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: .5rem;
  padding-right: .5rem;
  min-width: 44px;
  z-index: 10;
  ${({ active }) => active && css`
    pointer-events: none;
    border-bottom: 2px solid #fff;
  `}
`
const SinglePageScroll = styled(ScrollLink)`
position: relative;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const StyledSwitch = styled(Switch).attrs(props => ({
  onHandleColor: props.theme.colors.primary,
  offHandleColor: props.theme.colors.primary,
}))`

`

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Header = ({ location, onChangeTheme, theme, }) => {
  const [linkState, setLinkState] = useState(false)
  
  useEffect(()=>{checkLocation()})

  const checkLocation = () => {
    if(location.pathname !== '/'){
      setLinkState(false)  
    document.getElementById('resume-link').style.display ='none'
    } else if (location.pathname === '/'){
      setLinkState(true)
      document.getElementById('resume-link').style.display ='flex'
    }  
  }
  

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkGroup>
            <HeaderLink
              active={location.pathname === withPrefix('/')}
              to={'/'} >
              Home
            </HeaderLink>
            <SinglePageScroll
              to='resume' smoothScroll= {true}id="resume-link">
              Resume
            </SinglePageScroll>
            <HeaderLink
              active={location.pathname === withPrefix('/portfolio')}
              to={'/portfolio'} >
              Portfolio
            </HeaderLink>
            <HeaderLink
              active={location.pathname === withPrefix('/contact')}
              to={'/contact'} >
              Contact
            </HeaderLink>
        </HeaderLinkGroup>
        {siteConfig.enableDarkmode && <SwitchWrapper >
          <StyledSwitch 
            onChange={onChangeTheme} 
            checked={theme === 'light'}
            onColor="#626262"
            offColor="#212121"
            checkedIcon={<IconWrapper><FiSun color="yellow" /></IconWrapper>}
            uncheckedIcon={<IconWrapper><FiMoon color="white" /></IconWrapper>}
          />
        </SwitchWrapper>}
      </HeaderNav>
    </HeaderWrapper>
  )
}

/*const locationCheck = (location) => {
  console.log(location.pathname)  
  if (location.pathname !== '/'){
    console.log('not equal to /')
    window.location.href=`${location.origin}/`
  }
}*/

export default Header