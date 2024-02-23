import React, { useCallback, useState } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
  const [input, setInput] = useState('');

  const onChange = useCallback(e => {
    setInput(e.target.value);
  });

  const onClick = useCallback(
    e => {
      console.log('insert callback');
      onInsert(input);
      setInput(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, input],
  );
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요." value={input} onChange={onChange} />
      <button type="submit" onClick={onClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
