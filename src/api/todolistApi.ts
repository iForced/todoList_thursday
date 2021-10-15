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
        deleteTodo() {
            return axiosInstance.delete<ResponseType>(`/todo-lists/69ff5e1d-771b-4946-b7dc-cbf6f722b3d3`)
        },
        updateTaskTitle(title: string) {
            return axiosInstance.put<ResponseType>(`/todo-lists/6a369f14-dbd4-49d2-8344-51f3be13ce40`, {title})
        }
    }
}