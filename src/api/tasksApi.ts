import axios from "axios";

type TaskType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
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

export const tasksApi = () => {
    return {
        getTasks(todolistID: string) {
            return axiosInstance.get<Array<TaskType>>(`/todo-lists/${todolistID}/tasks`)
        },
        createTask(todolistID: string, title: string) {
            return axiosInstance.post<ResponseType<{item: TaskType}>>(`/todo-lists/${todolistID}/tasks`, {title})
        },
        deleteTask(todolistID: string, taskID: string) {
            return axiosInstance.delete<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskID}`)
        },
        updateTaskTitle(todolistID: string, taskID: string, title: string) {
            return axiosInstance.put<ResponseType>(`/todo-lists/${todolistID}/tasks/${taskID}`, {title})
        }
    }
}