/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CvLogo } from './components/images/CvLogo';


export const Body: React.FC = () => {

  return (
    <AppWrapper>
      <CvLogo />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;