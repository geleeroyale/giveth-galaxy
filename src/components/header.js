import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Button from './button'
import colors from '../utils/colors'

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding: 4rem 0;
  z-index: 100;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &.HeaderScrolled {
    background: ${colors.nav_bg};
    padding: 1rem 0;
    backdrop-filter: blur(20px);

    a {
      color: ${colors.light};
    }
  }

  @media (max-width: 640px) {
    padding: 1rem 0;

    a:nth-child(5) {
    }

    h1 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`

const NavGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  a {
    color: ${colors.theme};
  }

  img {
    margin: auto;
  }

  @media (max-width: 640px) {
    padding: 1rem 0.5rem;
    justify-self: center;
    margin: 0;
  }
`

const HomeLogo = styled.img`
  @media (max-width: 640px) {
    width: 20px;
    height: 20px;
  }
`
let $logocolor = 'purple'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      hasScrolled: false,
    }
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
      $logocolor = 'white'
    } else {
      this.setState({ hasScrolled: false })
      $logocolor = 'purple'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Navbar className={this.state.hasScrolled ? 'HeaderScrolled' : ''}>
        <NavGroup>
          <Link to="/">
            <HomeLogo
              height="35px"
              width="35px"
              src={require('../images/logo/giveth-symbol-logo-' +
                $logocolor +
                '.svg')}
              alt=""
              className="navlogo"
            />
          </Link>
          <Link to="/join">Join</Link>
          <Link to="/#heronav">Galaxy</Link>
          <Link to="/#dapp">DApp</Link>
          <Link to="/donate">
            <Button light>Donate</Button>
          </Link>
        </NavGroup>
      </Navbar>
    )
  }
}

export default Header
