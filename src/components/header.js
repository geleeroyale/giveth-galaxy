import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Button from './button'

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &.HeaderScrolled {
    background: rgba(0, 0, 0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(20px);

    a {
      color: #777777;
    }
  }

  @media (max-width: 640px) {
    padding: 15px 0;

    a:nth-child(5) {
      display: none;
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 24px;
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
    color: white;
  }

  img {
    margin: auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(4, auto);
    padding: 0 0.5rem;
    justify-self: center;
    width: 90%;
    margin: 0;
  }
`

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
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Navbar className={this.state.hasScrolled ? 'HeaderScrolled' : ''}>
        <NavGroup>
          <Link to="/">
            <img
              height="35px"
              width="35px"
              src={require('../images/logo/giveth-symbol-logo-white.svg')}
              alt=""
              className="navlogo"
            />
          </Link>
          <Link to="/join">Join</Link>
          <Link to="#dapp">DApps</Link>
          <Link to="#dac">Community</Link>
          <Link to="/donate">
            <Button light>Donate</Button>
          </Link>
        </NavGroup>
      </Navbar>
    )
  }
}

export default Header
