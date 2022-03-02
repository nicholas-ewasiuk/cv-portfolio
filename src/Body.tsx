/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CvLogo } from './components/images/CvLogo';
import { SmDiamondIcon } from './components/images/SmDiamondIcon';
import { PolyOneBorder } from './components/images/PolyOneBorder';
import { PolyTwoBorder } from './components/images/PolyTwoBorder';
import { PolyThreeBorder } from './components/images/PolyThreeBorder';
import wizardStudy from "url:./assets/img/wizardstudy.png";
import kingCrow from "url:./assets/img/kingcrow.png";
import kelpie from "url:./assets/img/kelpie.png";

export const Body: React.FC = () => {

  return (
    <AppWrapper>
      <CvLogo />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          width: 200px;
          justify-content: space-around;
          margin: 20px 0 20px 0;
        `}
      >
        <SmDiamondIcon />
        <SmDiamondIcon />
        <SmDiamondIcon />
      </div>
      <div
          css={css`
            position: relative;
            left: 100px;
            margin: 20px 0 20px 0;
          `} 
        >
        <PolyOneBorder />
        <img 
          src={wizardStudy} 
          alt="Wizard's Study"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          `} 
        />
      </div>
      <div
        css={css`
          position: relative;
          right: 100px;
          margin: 20px 0 20px 0;
        `} 
      >
        <PolyTwoBorder />
        <img 
          src={kingCrow} 
          alt="King Crow"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          `} 
        />
      </div>
      <div
        css={css`
          position: relative;
          left: 100px;
          margin: 20px 0 20px 0;
        `} 
      >
        <PolyThreeBorder />
        <img 
          src={kelpie} 
          alt="Kelpie"
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          `} 
        />
      </div>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;