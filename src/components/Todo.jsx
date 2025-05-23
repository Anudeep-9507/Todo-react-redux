import { useSelector, useDispatch } from "react-redux";
import AddForm from './AddForm';
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import styles from './todo.module.css';

export default function Todo() {
    const todos = useSelector((state) => state.todos.todos); // <- assumes store uses { todos: todoReducer }
    const dispatch = useDispatch();

    const handleDelete = (id) => dispatch(deleteTodo(id));
    const handleMark = (id) => dispatch(markAsDone(id));

    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "1.8rem", marginBottom: "1rem" }}>Todo List App</h2>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.todoItem}>
                        <span className={`${styles.todoText} ${todo.isDone ? styles.done : ''}`}>
                            {todo.task}
                        </span>
                        <div className={styles.buttons}>
                            <button className={`${styles.btn} ${styles.deleteBtn}`} onClick={() => handleDelete(todo.id)}>
                                Delete
                            </button>
                            {!todo.isDone && (
                                <button className={`${styles.btn} ${styles.doneBtn}`} onClick={() => handleMark(todo.id)}>
                                    Mark as Done
                                </button>
                            )}
                        </div>
                    </li>

                ))}
            </ul>
        </>
    );
}
