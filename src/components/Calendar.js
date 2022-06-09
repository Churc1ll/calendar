import React from 'react';
import Day from './Day';
import 'font-awesome/css/font-awesome.min.css';
import { useGlobalContext } from '../Context';
import styled from 'styled-components';

const Calendar = () => {
  const {
    dateToday,
    monthNow,
    yearNow,
    NumberofDayOfTheWeek,
    daysOfWeek,
    devAlert,
  } = useGlobalContext();

  return (
    <Wrapper>
      <section className='calendar'>
        {daysOfWeek.map((day, index) => {
          let date = dateToday - (NumberofDayOfTheWeek - index);

          return <Day day={day} date={date} />;
        })}
      </section>
      <section className='month-section'>
        <div onClick={devAlert}>
          <p className='arrows'>
            <i class='fa fa-solid fa-angle-left '></i>
          </p>
        </div>
        <div className='month' onClick={devAlert}>
          <p>
            {monthNow} {yearNow}
          </p>
        </div>
        <div onClick={devAlert}>
          <p className='arrows'>
            <i class='fa fa-solid fa-angle-right '></i>
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: rgb(238, 238, 248);
  border: 2px solid rgba(218, 218, 250, 0.822);
  border-left-color: transparent;
  border-right-color: transparent;
  padding-left: calc(110px * 0.7);
  max-width: 659px;
  width: calc((100%-110px) * 0.7);
  .calendar {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
  }
  .month-section {
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    margin-top: -28px;
  }
  .month {
    cursor: pointer;
    font-size: calc(26px * 0.7);
    font-weight: 600;
  }
  .arrows {
    cursor: pointer;
    color: red;
    font-size: calc(2rem * 0.9);
    transform: translateY(-17%);
    margin-right: 10px;
  }
`;
export default Calendar;
