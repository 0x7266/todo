import { useTodosContext } from '../hooks/useTodosContext';

export default function Todo({ todo }) {
  const { text, isCompleted } = todo;
  const { todos, dispatch } = useTodosContext();

  async function handleStatus(todo) {
    const response = await fetch(`/api/todo/${todo._id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify({ ...todo, isCompleted: !isCompleted }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({});
    }
  }

  async function handleDelete(e, todo) {
    e.preventDefault();
    const response = await fetch(`/api/todo/${todo._id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: 'DELETE_TODO', payload: data });
    }
  }

  return (
    <div
      className={
        'todo flex justify-between items-center bg-blue w-full px-8 py-3 rounded text-2xl text-neutral-400 ' +
        (isCompleted ? 'completed' : '')
      }
    >
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={() => handleStatus(todo)}
          checked={isCompleted}
          className="checkbox"
        />
        <div className="checkmark"></div>
      </label>
      {/* <div
        onClick={(e) => enterEditMode(e, text)}
        className={'todo-text w-full px-5' + (isCompleted ? 'completed' : '')}
      > */}
      {/* {editMode && isCompleted ? (
        {isCompleted ? (
          <input
            autoFocus
            //onChange={(e) => setNewText(e.target.value)}
            // onBlur={() => handleEdit()}
            type="text"
            className="edit-input bg-transparent text-center w-full"
          />
        ) : ( */}
      <div className="break-all w-full px-5">{text}</div>
      {/* )} */}
      {/* </div> */}
      <button
        type="button"
        value="X"
        onClick={(e) => handleDelete(e, todo)}
        className="btn w-8 text-red-default hover:text-red-lighter transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </div>
  );
}
