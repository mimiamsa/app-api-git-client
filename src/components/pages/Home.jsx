import React from 'react';
import Signin from '../Signin';
import Profile from '../Profile';
import { AuthConsumer } from "./../../auth/Guard";
import styled from "styled-components";
import LogoAnim from './../../components/LogoAnim'
import { device } from './../device';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 18px;
`

const SignInWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 30%; */
  width: 100%;
  @media ${device.laptop}{
  margin-top: 10%;
  }
  @media ${device.laptopL}{
    margin-top: 5%;

  }
`

const Description = styled.p`
font-size: .9rem;
text-align: center;
max-width: 280px;
`


function Home() {

  return (
    <AuthConsumer>
      {({ loginStatus, user, repos, orgs }) =>

        <Wrapper>
          {loginStatus && user && repos ? <Profile user={user} repos={repos} orgs={orgs} /> :
            <>
              <SignInWrapper>
                <LogoAnim />
                <Signin />
                <Description>A (very) simple application that displays some of your git informations…  </Description>
              </SignInWrapper>
            </>
          }

        </Wrapper>
      }

    </AuthConsumer>
  )
}

export default Home;