import TodoItem from "./TodoItem";

function TodoList({ todos, onChange, onDelete }) {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onChange={onChange}
                    onDelete={onDelete}
                />
            ))
            }
        </>
    )
}

export default TodoList;