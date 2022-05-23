import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({todo,onDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = useState(todo.value)

  return (
    <div className={styles.todoForm} key={todo.id}>
      <input data-cy="add-task-input" type="text" typeof="radio" value={value}
      checked={value}
      onChange={(e)=>{setValue(e.target.value)}} />
      {todo.value}
      <button data-cy="add-task-button"  className='delebut' onClick={()=>onDelete(todo.id)}></button>
    </div>
  );
};

export default AddTask;
