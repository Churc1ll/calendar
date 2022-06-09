import React from 'react';
import { useGlobalContext } from '../Context';

const Cell = () => {
  const { cellToggle } = useGlobalContext();
  return <td tabindex='0' onClick={(e) => cellToggle(e)}></td>;
};
export default Cell;
