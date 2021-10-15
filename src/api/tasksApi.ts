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
        getTasks() {
            return axiosInstance.get<Array<TaskType>>('/todo-lists/eb99471c-be5b-4e84-8585-e210c8a6c34e/tasks')
        },
        createTask(title: string) {
            return axiosInstance.post<ResponseType<{item: TaskType}>>('/todo-lists/eb99471c-be5b-4e84-8585-e210c8a6c34e/tasks', {title})
        },
        deleteTask() {
            return axiosInstance.delete<ResponseType>('/todo-lists/eb99471c-be5b-4e84-8585-e210c8a6c34e/tasks/6a369f14-dbd4-49d2-8344-51f3be13ce40')
        },
        updateTaskTitle(title: string) {
            return axiosInstance.put<ResponseType>('/todo-lists/eb99471c-be5b-4e84-8585-e210c8a6c34e/tasks/6a369f14-dbd4-49d2-8344-51f3be13ce40', {title})
        }
    }
}