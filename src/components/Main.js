import React, {useEffect, useState} from 'react';
import MenuItem from '../images/menu-item.svg';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";
import Context from "../context/context";

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

    // other solution

    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    //   .then((response) => response.json())
    //   .then((todos) => {
    //     setTodos(todos);
    //   })

    const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3';
    (async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return setTodos(data);
      } catch (err) {
        console.log(err)
      }
    })();
  }, []);


  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);

  };


  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    );
  };


  return (
    <Context.Provider value={{handleDelete, handleEdit, handleComplete}}>
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
              />
            </section>
            <section className='content_completed'>
              <CompletedList
                todos={todos}
              />
            </section>
          </div>
        </div>
      </main>
    </Context.Provider>
  );
}

export default Main;