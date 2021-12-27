import React, {useContext}  from 'react';
import DeleteBtn from '../images/delete.svg';
import Context from "./Context";


function CompletedList({todos}) {

  const {handleComplete, handleDelete} = useContext(Context);

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
