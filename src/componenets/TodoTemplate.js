import './TodoTemplate.scss';
import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <MdCalendarToday />
        <h>일정관리</h>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
