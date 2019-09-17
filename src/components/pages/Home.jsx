import React from 'react';
import Signin from '../Signin';
import Profile from '../Profile';
import { AuthConsumer } from "./../../auth/Guard";

export default function Home() {

  return (
    <AuthConsumer>
      {({ loginStatus, user, repos, orgs }) =>
      
        <div className="page-container">
          {loginStatus && user && repos ? <Profile user={user} repos={repos} orgs={orgs}/> :
            <>
              <h1>Welcome</h1>
              <Signin />
            </>
          }
          
        </div>
      }

    </AuthConsumer>
  )
}
