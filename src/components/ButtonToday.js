import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';

const ButtonToday = () => {
  const { actionToday } = useGlobalContext();
  return (
    <Wrapper>
      <div onClick={actionToday}>
        <button className='button'>
          <h3>Today</h3>
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-left: calc(51px * 0.7);
`;
export default ButtonToday;
