import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Article, Header } from './components';

function App() {
  const videoData = useSelector((state) => state.searchApp.videoData);

  return (
    <>
      <Header />
      <Main>
        <Section>
          {
            videoData
              ? videoData.map((data) => <Article key={data.id.videoId} data={data} />)
              : null
          }
        </Section>
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: #F9F9F9;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem 1rem;
  padding: 3rem 0;
  margin: 0 1.5rem;
  border-top: 4px solid #CCC;
  &:first-child {
    border-top: none;
  }
`;

export default App;
