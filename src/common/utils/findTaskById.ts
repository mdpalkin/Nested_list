import {TasksType} from "../../features/TasksList/model/tasks-reducer.ts";

export const findTaskById = (tasks: TasksType[], id: string): TasksType | null => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return tasks[i];
        }
        if (tasks[i].children.length > 0) {
            const foundTask = findTaskById(tasks[i].children, id);
            if (foundTask) {
                return foundTask;
            }
        }
    }
    return null;
}



