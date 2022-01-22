import React, {useContext} from 'react';
import DeleteBtn from '../images/delete.svg';
import EditBtn from '../images/edit.svg';
import Context from "../context/context";


function TodoList({todos}) {

  const {handleComplete, handleDelete, handleEdit} = useContext(Context);

  return (
    <div>
      <span className='uncompleted-counter'>To do ({todos.filter(todo => !todo.completed).length})</span>
      <ul className="todo-list">
        {todos.filter(todo => !todo.completed)
          .map((todo) => (

            <li className='list-item' key={todo.id}>
              <input className='list-item_checkbox'
                     type='checkbox'
                     checked={todo.completed}
                     onChange={() => handleComplete(todo)}
                     onKeyPress={e => e.key === 'Enter' ? handleComplete(todo) : ''}
              />
              <input className='list-item_input'
                     type='text'
                     value={todo.title}
                     onChange={e => e.preventDefault()}
              />
              <input type="image" className='edit-btn' src={EditBtn} alt='edit button'
                     onClick={() => handleEdit(todo)}/>
              <input type="image" className='delete-btn' src={DeleteBtn} alt='delete button'
                     onClick={() => handleDelete(todo)}/>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default TodoList;
