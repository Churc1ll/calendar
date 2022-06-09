import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Context';

const ButtonPlus = () => {
  const { actionPlus } = useGlobalContext();
  return (
    <Wrapper>
      <button className='button' onClick={actionPlus}>
        <h2>+</h2>
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-right: calc(34px * 0.7);
`;
export default ButtonPlus;
