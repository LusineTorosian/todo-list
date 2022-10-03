function TodoItem({ todo, onChange, onDelete }) {

    const onChangeHandler = (event) => {
        onChange({
            ...todo,
            isCompleted: event.target.checked
        });
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={onChangeHandler} /> {todo.text}
                <button onClick={() => { onDelete(todo) }}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;