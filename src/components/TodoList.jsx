import React from 'react';
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {filteredTodos.map(elem => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={elem}
                        text={elem.text}
                        key={elem.id}
                        id={elem.id}
                    />
                ))
                }
            </ul>
        </div>
    );
};

export default TodoList;