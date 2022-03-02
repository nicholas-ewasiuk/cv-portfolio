/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CvLogo } from './components/images/CvLogo';
import { SmDiamondIcon } from './components/images/SmDiamondIcon';
import { PolyOneBorder } from './components/images/PolyOneBorder';
import { PolyTwoBorder } from './components/images/PolyTwoBorder';
import { PolyThreeBorder } from './components/images/PolyThreeBorder';

export const Body: React.FC = () => {

  return (
    <AppWrapper>
      <CvLogo />
      <div
        css={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <SmDiamondIcon />
        <SmDiamondIcon />
        <SmDiamondIcon />
      </div>
      <BorderedImage>
        <PolyOneBorder />
        <img 
          src='assets/cv-wizard-study500px.png' 
          alt="Wizard's Study"
          css={css`
            position: absolute;
          `} 
        />
      </BorderedImage>
      <BorderedImage>
        <PolyTwoBorder />
      </BorderedImage>
      <BorderedImage>
        <PolyThreeBorder />
      </BorderedImage>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BorderedImage = styled.div`
  display: flex;
`
