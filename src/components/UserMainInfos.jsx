import React from 'react';
import styled from "styled-components";
import { device } from "./device"

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 32px;
align-items:center;
text-align: center;

@media ${device.laptop} {
  flex-direction: row;
  text-align: left;
}
`

const WrapperInfos = styled.div`
`

const Infos = styled.ul`
display: flex;
justify-content: space-between;
@media ${device.laptop} {
  width: 80%;
}
`
const InfosItem = styled.li`
text-transform: uppercase;
font-size: .8rem;
`
const WrapperAvatar = styled.div`
    border-radius: 50%;
    overflow: hidden;
    height: 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
      height: 20%;
    width: 20%;   
     margin-right: 28px;


}
`
const Avatar = styled.img`
    width: 100%;  
`
const Title = styled.h1`
font-size: 2.8rem;
margin-bottom: 24px;
`
const Bio = styled.h3`
font-weight: 300;
margin-bottom: 24px;
max-width: 370px;

`
const UserMainInfos = ({ user }) => {
  return (
    <Wrapper>
      <WrapperAvatar>
        <Avatar src={user.avatar_url} />
      </WrapperAvatar>
      <WrapperInfos>
        <Title>{user.name}</Title>
        <Bio>{user.bio}</Bio>
        <Infos>
          <InfosItem>{user.followers} follower{user.followers > 1 ? "s" :""}</InfosItem>
          <InfosItem>{user.public_repos} repositor{user.public_repos > 1 ? "ies" :"y"}</InfosItem>
          <InfosItem>{user.following} following</InfosItem>
        </Infos>
      </WrapperInfos>
    </Wrapper>
  )
}

export default UserMainInfos
