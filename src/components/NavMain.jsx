import React from 'react';
import { NavLink } from 'react-router-dom';
// import axios from "axios";
import { AuthConsumer } from "./../auth/Guard"
import { withRouter } from "react-router-dom"

function NavMain(props) {
  function handleLogOut(signoutclbk) {
    signoutclbk((res) => {
      props.history.push("/")
    })
  }

  return (
    <nav>
      <AuthConsumer>
        {({ loginStatus, user, signout }) =>
          <ul>
            {loginStatus && user ? <li><NavLink to="/">{user.name}</NavLink></li> : void (0)}
            <li><NavLink to="/about">About</NavLink></li>
            {loginStatus && user ? <li><button className="primary-btn small" onClick={() => handleLogOut(signout)}>log out</button></li> : void (0)}

            
          </ul>
        }
      </AuthConsumer>
    </nav>
  )
}


export default withRouter(NavMain)

