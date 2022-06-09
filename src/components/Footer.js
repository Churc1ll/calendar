import React from 'react';
import styled from 'styled-components';
import ButtonDelete from './ButtonDelete';
import ButtonToday from './ButtonToday';

const Footer = () => {
  return (
    <Wrapper>
      <ButtonToday />
      <ButtonDelete />
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
`;
export default Footer;
