import React from 'react';
import styled from 'styled-components';
import { blink } from '../utils/keyframes';

export const Mark = styled.span`
    width: 25px;
    height: 35px;
    background: #EBF2FF;
    border-left: 2px solid #00296b;
    display: inline-block;
    position: absolute;
    bottom: ${props => props.left === 0 ? '-5px' : 0};
    left: ${props => props.left ? `${props.left}px` : '0'};
    animation: ${blink} 0.4s linear infinite;
`

export const SubTitle = styled.span`
  display: inline-block;
  color: #00296B;
  position: relative;
`

export const SubTitleContainer = styled.h4`
  display: inline-block;
  font-size: ${window.innerWidth <= 414 ? '1em' : '2em'};
  margin: 0.3em 0;
  color: #00296B;
`