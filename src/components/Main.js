import React, {useState, useEffect} from 'react';
import MenuItem from '../images/menu-item.svg';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";

function Main() {

  //example with the localStorage
  //
  // const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  // const [todos, setTodos] = useState(initialState);
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      })
  }, []);


  return (

    <main className='main'>
      <div className='sidebar'>
        <div className='menu-item'>
          <img className='menu-item_img' src={MenuItem} alt='menu item'/>
        </div>
      </div>
      <div className='container'>
        <div className='content'>
          <section className='content_left'>
            <TodoForm
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              edit={edit}
              setEdit={setEdit}
            />
            <div className='total-counter'>
              <span className='total-counter_title'>Total: {todos.length}</span>
            </div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEdit={setEdit}
            />
          </section>
          <section className='content_completed'>
            <CompletedList
              todos={todos}
              setTodos={setTodos}/>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;