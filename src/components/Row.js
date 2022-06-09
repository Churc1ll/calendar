import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const Row = () => {
  const row = [...Array(7)];
  return (
    <Wrapper>
      <article>
        <tr>
          {row.map((_) => (
            <Cell />
          ))}
        </tr>
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  justify-content: center;
  width: 100%;
  tr {
    display: flex;
    flex: 1 1 auto;
    width: auto;
  }
`;
export default Row;
