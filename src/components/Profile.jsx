import React from 'react';
import OrgInfos from './OrgInfos';
import RepoCard from './RepoCard';
import UserMainInfos from './UserMainInfos';
import styled from "styled-components";
import { device } from './device';


const Wrapper = styled.div`
width: 95%;
`

const RepoCardWrapper = styled.div`
@media ${device.laptop} {
  display: flex;
  flex-direction: row;
}
`
const NoOrg = styled.p`
  padding: 18px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 24px 0 48px;
`


const Profile = ({ user, repos, orgs }) => {


  return (
    <Wrapper>

      <UserMainInfos user={user} />
      {orgs.length > 0 ? orgs.map((org, i) => {
        return (
          <OrgInfos key={i} orgName={org.login}/>
        )
      }) : <NoOrg>You’re not part of an organization yet ...</NoOrg>
      }


      <RepoCardWrapper>
        {repos.length > 0 ? repos.map((repo, i) => {
          return (
            <RepoCard key={i} repoName={repo.name} repoCommits={repo.totalCommits?repo.totalCommits: "" }  repoUrl={repo.full_name}/>
          )
        }) : <NoOrg>You didn't create any repository yet ...</NoOrg>}

      </RepoCardWrapper>
    </Wrapper>
  )
}

export default Profile
