import React from 'react';
import styled from "styled-components";





const OrgName = styled.p`
  padding: 18px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  text-align: center;
  font-weight: 400;
  font-size: 0.9rem;
  margin: 24px 0 48px;
`

const OrgInfos = ({ orgName, orgAvatar }) => {
  return (

    <OrgName> You are part of {orgName} </OrgName>

  )
}

export default OrgInfos
