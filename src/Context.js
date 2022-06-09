import React, { useContext, useEffect, useRef, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showButton, setShowButton] = useState(false);
  // eslint-disable-next-line
  useEffect(() => actionToday, []);
  const inputEl = useRef(null);

  const cellToggle = (e) => {
    e.target.classList.add('cell-active');
    setShowButton(true);
    inputEl.current = e.target;
  };

  const actionToday = () => {
    let lastButton = document.querySelector('.button-active');
    if (lastButton) lastButton.classList.remove('button-active');
    document.getElementById(`${dateToday}`).classList.add('button-active');
  };

  const actionDelete = () => {
    inputEl.current.classList.toggle('cell-active');
    setShowButton(false);
  };
  const click = (e) => {
    if (e.target.tagName === 'TD' || e.target.classList.contains('button'))
      return;
    else setShowButton(false);
  };
  document.addEventListener('click', click);

  const numberToMonth = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[date.getUTCMonth()];
  };

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const date = new Date();
  const dateToday = date.getUTCDate();
  const monthNow = numberToMonth();
  const yearNow = date.getFullYear();
  const NumberofDayOfTheWeek = date.getUTCDay() - 1;

  const actionPlus = () => {
    const message = 'Enter event time: YYYY-MM-DD HH:mm:ss';
    const newDate = new Date();
    const promptMessage = `${newDate.getFullYear()}-${
      newDate.getMonth() + 1
    }-${newDate.getDate()} ${newDate.getHours()}:${newDate.getSeconds()}:${newDate.getSeconds()}`;

    prompt(message, promptMessage);
    devAlert();
  };

  const devAlert = () => {
    alert('this option is being under development now!');
  };

  return (
    <AppContext.Provider
      value={{
        showButton,
        setShowButton,
        cellToggle,
        actionToday,
        actionDelete,
        actionPlus,
        dateToday,
        monthNow,
        yearNow,
        NumberofDayOfTheWeek,
        daysOfWeek,
        devAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
