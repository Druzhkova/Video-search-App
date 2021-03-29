import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  logo, iconMagnify, videoPlus, apps, bell, avatar,
} from '../../assets/index';
import { Button } from '../Button';
import { Input } from '../Input';
import { getVideoRequest } from '../../actions';
import { isURL, getVideoIdFromUrl } from '../../utils';

export const Header = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const search = useCallback((e) => {
    e.preventDefault();
  }, []);

  const getVideoData = useCallback(() => {
    setValue('');
    if (isURL(value)) {
      const videoId = getVideoIdFromUrl(value);
      dispatch(getVideoRequest(videoId));
      return;
    }
    dispatch(getVideoRequest(value));
  }, [dispatch, value]);

  return (
    <StyledHeader>
      <Inner>
        <Link href="/index.html">
          <Logo src={logo} alt="Logo" />
          <Span>Search</Span>
        </Link>
        <Form onSubmit={search}>
          <StyledInput value={value} onChange={setValue} placeholder="Введите запрос" aria-label="Search" />
          <StyledButton onClick={getVideoData}>
            <img src={iconMagnify} alt="Magnify" />
          </StyledButton>
        </Form>
        <Menu className="menu-icons">
          <a href="/index.html">
            <img src={videoPlus} alt="Upload Video" />
          </a>
          <a href="/index.html">
            <img src={apps} alt="Apps" />
          </a>
          <a href="/index.html">
            <img src={bell} alt="Notifications" />
          </a>
          <a href="/index.html">
            <MenuChannelIcon src={avatar} alt="Your Channel" />
          </a>
        </Menu>
      </Inner>
    </StyledHeader>
  );
};

const Inner = styled.div`
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 330px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  background: #fff;
`;

const Logo = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 0 2rem;
  @media screen and (max-width: 680px) {
    margin: 0 0 0 2rem;
  }
  @media screen and (max-width: 330px) {
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  width: 100%;
  max-width: 575px;
  font-size: inherit;
  padding: .4em;
  border: 1px solid #ACAEB2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border: 1px solid #ACAEB2;
  background-color: #F8F8F8;
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #F0F0F0;
  }
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const MenuChannelIcon = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background-color: #AAA;
`;

const Span = styled.span`
  color: black;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  @media screen and (max-width: 330px) {
    margin-bottom: 13px;
  }
`;
