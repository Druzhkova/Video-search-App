import React from 'react';
import styled from 'styled-components';
import { Frame } from '../Frame';

export const Article = ({ data }) => {
  const {
    title, publishTime, channelTitle, thumbnails,
  } = data.snippet;
  const publishData = publishTime.slice(0, 10);

  return data
    ? (
      <StyledArticle>
        <Frame data={data} />
        <VideoBottomSection>
          <a href="/index.html">
            <Img alt="Avatar" src={thumbnails.default.url} />
          </a>
          <VideoDetails>
            <VideoTitle href="/index.html">{title}</VideoTitle>
            <VideoChannelName href="/index.html">{channelTitle}</VideoChannelName>
            <VideoMetadata>
              <span>{publishData}</span>
            </VideoMetadata>
          </VideoDetails>
        </VideoBottomSection>
      </StyledArticle>
    )
    : null;
};

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const VideoBottomSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

const Img = styled.img`
  margin-right: .75rem;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #AAA;
`;

const VideoDetails = styled.div`
  max-width: 225px;
  font-size: 14px; 
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: .5rem;
  text-decoration: none;
  color: black;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const VideoChannelName = styled.a`
  margin-bottom: .1rem;
  text-decoration: none;
  transition: color 150ms;
  color: #555;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    color: #111;
  }
`;

const VideoMetadata = styled.div`
  color: #555;
`;
