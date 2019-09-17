import React from 'react';
// import axios from 'axios';

export default function Signin() {
  return (
    <div>
      <a className="primary-btn" href={`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=user`}>Sign in with Github</a>
    </div>
  )
}
