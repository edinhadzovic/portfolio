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
  display: inline-flex;
  flex-direction: row;
`

const Section = styled.section`
  height: ${document.documentElement.clientHeight - document.documentElement.}px;
  width: ${document.documentElement.clientWidth}px;
  background-color: #00296B;
`


const SimpleComponent = () => {
  return (
    <Wrapper>
      <Section>
        <Title>{yaml.title}</Title>
      </Section>
      <Section>
        <Title>{yaml.title}</Title>
      </Section>
      <Section>
        <Title>{yaml.title}</Title>
      </Section>
      <Section>
        <Title>{yaml.title}</Title>
      </Section>
      <Section>
        <Title>{yaml.title}</Title>
      </Section>
    </Wrapper>
  )
}

ReactDom.render(
  <SimpleComponent />,
  document.getElementsByTagName("body")[0],
)