import React from 'react';
import styled from "styled-components"
import { device } from './device';

const Button = styled.a`
  cursor:pointer;
  border: 1px solid white;
  color: white;
  padding: 12px 32px;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 24px;
  transition: background .3s ease-in-out;
  &:hover {
    background: white;
    color: #0A131D;
  }
  @media ${device.mobileM} {
    /* background: red; */

  }
`
export default function Signin() {
  return (
    <Button name=""  href="https://github.com/login/oauth/authorize?client_id=1febc16fa8237d46307c&scope=user">Sign in with Github</Button>
  )
}
