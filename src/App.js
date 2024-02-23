import './App.css';
import TodoTemplate from './componenets/TodoTemplate';
import TodoInsert from './componenets/TodoInsert';
import TodoList from './componenets/TodoList';

function App({ children }) {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
