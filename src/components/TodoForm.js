import React, {useEffect, useRef} from 'react';


function TodoForm({input, setInput, todos, setTodos, edit, setEdit}) {


  useEffect(() => {

    (async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({todos})

      })
        .then((response) => response.json())
        .then((json) => console.log('fetch data with POST method, json:', json));
    })();

  }, [todos]);


  const focusRef = useRef(null);

  useEffect(() => {
    if (edit) {
      focusRef.current.focus();
    }
  }, [edit]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    setEdit('');
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title)
    } else {
      setInput('');
    }
  }, [setInput, edit]);

  const onInputChange = () => {
    setInput(focusRef.current.value)
  };




  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([{id: Date.now(), title: input, completed: false}, ...todos]);
      setInput('');
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };


  return (
    <div>
      <form className='add-task' onSubmit={onFormSubmit}>
        <input className='add-task_input'
               type='text'
               placeholder='+ Add a task, press Enter to save'
               value={input}
               onChange={onInputChange}
               ref={focusRef}
               required
        />
        <button className='add-task_submit'>{edit ? 'Save' : 'Add'}</button>
      </form>
    </div>
  );
}

export default TodoForm;