import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from './device'

const CardWrapper = styled.a`
display: flex;
flex-direction: column;
border: 1px solid white;
padding : 28px;
border-radius: 5px;
width: 100%;
margin-bottom: 24px;
transition: border .3s ease-in-out;
&:hover {
  border: 2px solid white;
}

@media ${device.laptop} {
   width: 33.3%;
  margin-right: 2%;
  &:last-child {
  margin-right: 0;
    } 
}

`
const Wrapper = styled.div`
display : flex;
font-size: 1.6rem;
align-items: center;
p {
  margin-left: 24px;
  font-size: 1rem;
}
/* border-bottom: ${props => props.bordered ? '1px solid white' : 'none'};
padding-bottom: ${props => props.bordered ? '28px' : '0'}; */
`

const Hr = styled.hr`
border: 1px solid white;
margin: 24px 0;
border-top: 1px solid white;
border-bottom: none;

`

const RepoCard = ({ repoName, repoCommits, repoUrl }) => {
  return (
    <CardWrapper target="_blank" href={`https://github.com/${repoUrl}`}>
      <Wrapper><FontAwesomeIcon icon="folder-open" /><p>{repoName}</p></Wrapper>
      <Hr />
      <Wrapper><FontAwesomeIcon icon="comment-dots" />
      { repoCommits ? <p>{repoCommits} commit{repoCommits > 1 ? "s" :""}</p> : <p>No commit yet</p>}
      
      </Wrapper>
    </CardWrapper>
  )
}

export default RepoCard
