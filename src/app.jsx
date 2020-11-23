import yaml from './data.yaml';
import React from 'react';
import ReactDom from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`


const SimpleComponent = () => {
  return (
    <Wrapper>
      <Title>{yaml.title}</Title>
    </Wrapper>
  )
}

ReactDom.render(
  <SimpleComponent />,
  document.getElementsByTagName("body")[0]
)