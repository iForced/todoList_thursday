import axios from "axios";

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        'API-KEY': 'ade1566d-0e8e-48e7-bd8d-2867a98c2f5f'
    },
})

export const todolistApi = () => {
    return {
        getTodos() {
            return axiosInstance.get<Array<TodolistType>>('/todo-lists')
        },
        createTodo(title: string) {
            return axiosInstance.post<ResponseType<{item: TodolistType}>>('/todo-lists', {title})
        },
        deleteTodo(todolistID: string) {
            return axiosInstance.delete<ResponseType>(`/todo-lists/${todolistID}`)
        },
        updateTodoTitle(todolistID: string, title: string) {
            return axiosInstance.put<ResponseType>(`/todo-lists/${todolistID}`, {title})
        }
    }
}