import React from 'react';
import DeleteBtn from '../images/delete.svg';
import EditBtn from '../images/edit.svg';


function TodoList({todos, setTodos, setEdit}) {

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };
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
              <input type="image" className='edit-btn' src={EditBtn} alt='edit button' onClick={() => handleEdit(todo)}/>
              <input type="image"  className='delete-btn' src={DeleteBtn} alt='delete button' onClick={() => handleDelete(todo)}/>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default TodoList;
