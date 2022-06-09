import React from 'react';
import styled from 'styled-components';
import Hour from './Hour';
import Row from './Row';

const Schedule = () => {
  const time = [...Array(26).keys()];
  time.forEach((hour, index) => {
    if (String(hour).length === 1) time[index] = `0${hour}:00`;
    else time[index] = `${hour}:00`;
  });
  time[time.length - 2] = time[0];

  return (
    <Wrapper>
      <article className='hours-container'>
        {time.map((hour) => (
          <Hour hour={hour} />
        ))}
      </article>
      <article className='time-container'>
        {time.map((_) => (
          <Row />
        ))}
      </article>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 196px;
  width: 100%;
  .hours-container {
    width: 50px;
    margin-left: 18px;
    margin-top: 16px;
  }
  .time-container {
    flex: 1 1 auto;
  }
`;
export default Schedule;
