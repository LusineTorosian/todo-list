import { useState } from "react";

function ToDoForm({ onAdd }) {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAdd(text);
        setText("");
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={text} onChange={onChangeHandler} />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;