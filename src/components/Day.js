import React from 'react';
import styled from 'styled-components';

const Day = ({ day, date }) => {
  const dateToggle = (e) => {
    const lastButton = document.querySelector('.button-active');
    lastButton && lastButton.classList.toggle('button-active');
    e.target.classList.toggle('button-active');
  };
  return (
    <Wrapper>
      <div className='days-of-week__container'>
        <h4 className='days-of-week'>{day}</h4>
      </div>
      <div className='date-container'>
        <button>
          <h3 className='date' onClick={(e) => dateToggle(e)} id={date}>
            {date}
          </h3>
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding-right: 3px;
  .days-of-week__container {
    font-size: 14px;
    margin-top: -7px;
  }
  .days-of-week {
    margin-bottom: 12px;
    text-align: center;
  }

  .date-container {
    text-align: center;
    margin-top: -22px;
    margin-bottom: 22px;
  }
  .date {
    font-size: calc(26px * 0.7);
    line-height: calc(55px * 0.7);
  }
`;
export default Day;
