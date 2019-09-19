import React from 'react';
import { NavLink } from 'react-router-dom';
// import axios from "axios";
import { AuthConsumer } from "./../auth/Guard"
import { withRouter } from "react-router-dom"
// import styled, {ThemeProvider} from 'styled-components'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  padding: 18px 40px;
`;

const Img = styled.img`
    src: url(${props => props.src});
    width: 30px;
`
const UlList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const LiItem = styled.li`


`

const SignOut = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition:  border-bottom .3s ease-in-out;
    padding-bottom: 2px;
    &:hover {
    border-bottom: 1px solid white;
  }
`
const SignOutText = styled.p`
  text-transform: uppercase;
  font-size: .8rem;
  margin: -2px 6px 0 0;
  
`

function NavMain(props) {
  function handleLogOut(signoutclbk) {
    signoutclbk((res) => {
      props.history.push("/")
    })
  }

  return (
    <NavBar>
      <AuthConsumer>
        {({ loginStatus, user, signout }) =>
          <UlList>
            {loginStatus && user ?
              <LiItem>
                <NavLink to="/">
                  <Img src="https://res.cloudinary.com/dfbmzsyx7/image/upload/v1568813417/github-alt-2-07_xgwadk.svg" alt="navicon" />
                </NavLink>
              </LiItem> : void (0)}
            {/* <li><NavLink to="/about">About</NavLink></li> */}
            {loginStatus && user ?
              <LiItem>
                <SignOut onClick={() => handleLogOut(signout)}>
                  <SignOutText>Sign out</SignOutText>
                  <FontAwesomeIcon icon="sign-out-alt" style={{ color: "white" }} />
                </SignOut>
                {/* <button className="primary-btn small" onClick={() => handleLogOut(signout)}>log out</button> */}
              </LiItem> : void (0)}


          </UlList>
        }
      </AuthConsumer>
    </NavBar>
  )
}


export default withRouter(NavMain)

