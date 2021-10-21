import React, {useState} from 'react'
import {tasksApi} from "../api/tasksApi";

export default {
    title: 'API'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')

    const onGetTasks = () => {
        todolistID &&
        tasksApi()
            .getTasks(todolistID)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <button onClick={onGetTasks}>get tasks for list</button>
        <>eb99471c-be5b-4e84-8585-e210c8a6c34e</>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskTitle, setTaskTitle] = useState<string>('')

    const onCreateTask = () => {
        tasksApi().createTask(todolistID, taskTitle)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input type="text" placeholder="enter task title" value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
        <button onClick={onCreateTask}>create task</button>
        <>eb99471c-be5b-4e84-8585-e210c8a6c34e</>
    </div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')

    const onDeleteTask = () => {
        tasksApi()
            .deleteTask(todolistID, taskID)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input type="text" placeholder="enter task id" value={taskID} onChange={(e) => setTaskID(e.currentTarget.value)}/>
        <button onClick={onDeleteTask}>delete task</button>
    </div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [taskID, setTaskID] = useState<string>('')
    const [taskTitle, setTaskTitle] = useState<string>('')

    const onUpdateTaskTitle = () => {
        tasksApi()
            .updateTaskTitle(todolistID, taskID, taskTitle)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input type="text" placeholder="enter task id" value={taskID} onChange={(e) => setTaskID(e.currentTarget.value)}/>
        <input type="text" placeholder="enter new task title" value={taskTitle} onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
        <button onClick={onUpdateTaskTitle}>update task title</button>
    </div>
}
