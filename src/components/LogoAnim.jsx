import React from 'react'
import styled, { keyframes } from 'styled-components';
import {device} from "./device"

const keyFrame = keyframes`
  0% {
  transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
`

const Img = styled.img`
    src: url(${props => props.src});
    width: 60%;
    margin-bottom: 56px;
    animation: ${keyFrame} 2s infinite;
    animation-timing-function: cubic-bezier(.35,.12,.43,1);
    @media ${device.laptop}{
      width: 35%;
}
@media ${device.laptopL}{
  width: 30%;

  }
`


const LogoAnim = () => {
  return (
    <Img src="https://res.cloudinary.com/dfbmzsyx7/image/upload/v1568813417/github-alt-2-07_xgwadk.svg" />
  )
}

export default LogoAnim
