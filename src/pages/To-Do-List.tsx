import { useState } from "react";

function ToDoList(){
    
    const [taskList, setTaskList] = useState<any>([]);

    return(
        <>
            <h1 className="text-center fst-italic text-decoration-underline">To Do List</h1>
            <input type="text" placeholder="enter your task" className="" />
        </>
    );
}

export default ToDoList;