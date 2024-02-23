import './TodoTemplate.scss';
import React from 'react';
import { MdCalendarToday } from 'react-icons/md';
import Text from './Text';
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        <MdCalendarToday />
        <Text type="h5" color="white">
          일정관리
        </Text>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
