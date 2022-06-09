import React from 'react';
import styled from 'styled-components';
import ButtonPlus from './ButtonPlus';
import Calendar from './Calendar';

const Header = () => {
  return (
    <Wrapper>
      <header>
        <div className='header-logo'>
          <h2>Interview Calendar</h2>
        </div>
        <div className='button-container'>
          <ButtonPlus />
        </div>
      </header>
      <Calendar />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  .header-logo {
    margin-left: calc(51px * 0.7);
  }
  .button-container {
    width: 100px;
    line-height: calc(72px * 0.7);
    text-align: center;
  }
`;
export default Header;
