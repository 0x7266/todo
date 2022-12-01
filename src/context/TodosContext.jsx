import { createContext, useReducer } from 'react';

export const TodosContext = createContext();

function todosReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return { todos: action.payload };
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO': {
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    }
    // case 'EDIT_STATUS': {
    //   return {
    //     todos: state.todos.map((todo) =>
    //       todo._id === action.payload._id
    //         ? [
    //             ...state.todos,
    //             { ...todo, isCompleted: action.payload.isCompleted },
    //           ]
    //         : [...state.todos]
    //     ),
    //   };
    // }
    default:
      return state;
  }
}

export function TodosContextProvider({ children }) {
  const [state, dispatch] = useReducer(todosReducer, { todos: null });

  return (
    <TodosContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
