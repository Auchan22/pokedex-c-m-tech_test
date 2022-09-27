import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BiMoon, BiSun } from 'react-icons/bi';

import ThemeContext from '../Context/ThemeContext';

const Container = styled.div`
  min-width: 100%;
  background-color: ${(props) => (props.isdark ? '#0b090a' : '#dee2e6')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 80px;
  padding: 10px;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.67);
`;

const Button = styled.button`
  border-radius: 100%;
  background-color: ${(props) => (props.isdark ? '#d3d3d3' : '#0b090a')};
  color: ${(props) => (props.isdark ? '#0b090a' : '#dee2e6')};
  width: 40px;
  height: 40px;
  padding: auto;
  font-size: 20px;
  box-shadow: 0px 4px 20px -3px rgba(0, 0, 0, 0.67);
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: 2px solid ${(props) => (props.isdark ? '#d3d3d3' : '#0b090a')};
    outline-offset: 5px;
    transition: 250ms all ease;
  }
  &:hover {
    outline: 2px solid ${(props) => (props.isdark ? '#d3d3d3' : '#0b090a')};
    outline-offset: 5px;
    transition: 250ms all ease;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
    color: ${(props) => (props.isdark ? '#f5f3f4' : '#212529;')};
  }
  color: ${(props) => (props.isdark ? '#f5f3f4' : '#212529;')};
`;

const ThemeButton = ({ handleClick, isdark }) => {
  return (
    <Button onClick={handleClick} isdark={isdark}>
      {isdark ? <BiMoon /> : <BiSun />}
    </Button>
  );
};

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isdark, setisdark] = useState(theme === 'dark');

  const handleClick = () => {
    changeTheme();
    setisdark(() => theme === 'dark');
  };

  return (
    <Container isdark={isdark}>
      <StyledLink to='/' isdark={isdark}>
        <h2 className='nes-text'>Pokedex</h2>
      </StyledLink>
      <ThemeButton handleClick={handleClick} isdark={isdark} />
    </Container>
  );
};

export default Header;
