import React from 'react';
import DeleteBtn from '../images/delete.svg';


function CompletedList({todos, setTodos}) {

  const handleDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
    <div>
      <span className='completed-number'>Completed ({todos.filter(todo => todo.completed).length})</span>
      <ul className="todo-list">
        {todos.filter(todo => todo.completed)
          .map((todo) => (

            <li className='list-item completed' key={todo.id}>
              <input className='list-item_checkbox'
                     type='checkbox'
                     onKeyPress={e => e.key === 'Enter' ? handleComplete(todo) : ''}
                     checked={todo.completed}
                     onChange={() => handleComplete(todo)}/>
              <input className='list-item_input completed-input'
                     type='text'
                     value={todo.title}
                     onChange={e => e.preventDefault()}
              />
              <input type='image' className='delete-btn' src={DeleteBtn} alt='delete button' onClick={() => handleDelete(todo)}/>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default CompletedList;
