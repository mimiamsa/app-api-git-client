import React from 'react';
// import axios from 'axios';

export default function Signin() {
  return (
    <div>
      <a className="primary-btn" href={`https://github.com/login/oauth/authorize?client_id=1febc16fa8237d46307c&scope=user`}>Sign in with Github</a>
    </div>
  )
}
