import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks() {
        return this.tasks
    }

    addTask(task: CreateTaskDto) {
        return this.tasks.push(task);
    }

    updateTask(id: number, task: UpdateTaskDto) {
        return 'Update task'
    }

    patchTask() {
        return 'Patch task'
    }

    deleteTask() {
        return 'Delete task'
    }

}
