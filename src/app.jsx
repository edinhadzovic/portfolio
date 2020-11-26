import yaml from './data.yaml';
import React from 'react';
import ReactDom from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { SubTitle, SubTitleContainer } from './components/atoms';
import { Change } from './components/molecules';


const Name = styled.h5`
  font-size: 1em;
  font-family: 'Prata', serif;
  margin-left: 1em;
  color: #00296B;
`;

const Title = styled.h1`
  font-size: ${window.innerWidth <= 414 ? '2em' : '5em'};
  font-family: 'Prata', serif;
  margin: 0;
  color: #00296B;
`;

const Wrapper = styled.section`
  display: inline-flex;
  flex-direction: ${window.innerWidth <= 414 ? 'column' : 'row'};
`

const Section = styled.section`
  display: flex;
  flex-direction: row;
  height: ${window.innerHeight - 35}px;
  width: ${window.innerWidth}px;
  background-color: #EBF2FF;
`

const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`


const SimpleComponent = () => {
  return (
    <Wrapper>
      <Section>
        <Name>{yaml.bio.name}</Name>
        <ContentCenter>
          <Title>{yaml.bio.developer}</Title>
          <SubTitleContainer>{yaml.tagline.first.title} <Change skills={yaml.tagline.first.sections} /> </SubTitleContainer>   
        </ContentCenter>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
      <Section>
      </Section>
    </Wrapper>
  )
}

ReactDom.render(
  <SimpleComponent />,
  document.getElementsByTagName("body")[0]
)