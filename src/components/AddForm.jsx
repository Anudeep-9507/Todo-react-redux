import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        dispatch(addTodo(task));
        setTask(""); // Clear input
    };

    return (
        <form onSubmit={submitHandler} style={{ marginBottom: "1rem", textAlign: "center" }}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
                style={{
                    padding: "10px",
                    fontSize: "1rem",
                    width: "60%",
                    borderRadius: "6px",
                    border: "2px solid #ccc",
                    marginRight: "10px",
                    backgroundColor: "#fff",
                    color: "#000", // text color
                    textAlign: "center", // center text,
                    marginBottom: "7px"
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    borderRadius: "6px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                }}
            >
                Add Task
            </button>
        </form>
    );
}
