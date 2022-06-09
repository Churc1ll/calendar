import React from 'react';
import styled from 'styled-components';

const Hour = ({ hour }) => {
  return (
    <Wrapper>
      <p className='hours-p'>{hour}</p>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 27px;
  width: auto;
  .hours-p {
    margin-top: 38px;
    font-size: calc(23px * 0.7);
  }
`;
export default Hour;
