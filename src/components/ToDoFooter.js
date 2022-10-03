function ToDoFooter({ todos, onClearCompleted }) {

    const completedSize = todos.filter((todo) => todo.isCompleted).length;

    return (
        <>
            <span>{completedSize}/{todos.length} Completed</span>
            <button onClick={onClearCompleted}> Clear Completed</button>
        </>
    )
}

export default ToDoFooter; 