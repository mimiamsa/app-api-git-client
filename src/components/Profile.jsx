import React from 'react';


const Profile = ({ user, repos, orgs }) => {

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <p>{user.public_repos}</p>
      {repos.map((repo, i) => {
        return (
          <div key={i}>
            <p>{repo.name}</p>
            {/* repoLink */}
            <p> commit : {repo.totalCommits}</p>
          </div>
        )
      })}
      <img src={user.avatar_url} alt="avatar" />
      {orgs.length > 0 ? orgs.map((org, i) => {
        return (
          <div key={i}>
            <p>{org.login}</p>
            <img src={org.avatar_url} alt="org-avatar" />
          </div>)
      }) : <p>You’re not part of an organization</p>
      }
      {/* {orgs ? orgs.map((org, i) => <div key={i}> <p>{org.login}</p><img src={org.avatar_url} alt="org-avatar"/><div/>) : <p>You not part of an organization</p>} */}
    </div>
  )
}

export default Profile
