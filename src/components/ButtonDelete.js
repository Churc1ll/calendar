import React from 'react';
import { useGlobalContext } from '../Context';
import styled from 'styled-components';

const ButtonDelete = () => {
  const { showButton, actionDelete } = useGlobalContext();
  return (
    <Wrapper>
      {showButton && (
        <div className='button-delete'>
          <button onClick={actionDelete} className='button'>
            <h3>Delete</h3>
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-right: calc(51px * 0.7);
`;

export default ButtonDelete;
