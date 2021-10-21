import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolistApi";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    const onGetTodolists = () => {
        todolistApi()
            .getTodos()
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <button onClick={onGetTodolists}>get todolists</button>
    </div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('')
    const onCreateTodolist = () => {
        todolistApi()
            .createTodo(title)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="Enter todolist title" value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onCreateTodolist}>Create todolist</button>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const onDeleteTodolist = () => {
        todolistApi()
            .deleteTodo(todolistID)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="Enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <button onClick={onDeleteTodolist}>Create todolist</button>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistID, setTodolistID] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const onUpdateTodolistTitle = () => {
        todolistApi()
            .updateTodoTitle(todolistID, title)
            .then(res => setState(res.data))
    }

    return <div>
        {JSON.stringify(state)}
        <input type="text" placeholder="Enter todolist id" value={todolistID} onChange={(e) => setTodolistID(e.currentTarget.value)}/>
        <input type="text" placeholder="Enter todolist new title" value={todolistID} onChange={(e) => setTitle(e.currentTarget.value)}/>
        <button onClick={onUpdateTodolistTitle}>Create todolist</button>
    </div>
}
