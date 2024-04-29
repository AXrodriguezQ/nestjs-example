import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {

    constructor(private readonly taskService: TasksService) {}

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: 'Return all tasks' })
    @ApiResponse({ status: 403, description: 'Forbidden' })
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.taskService.getTasks();
    }

    @Post()
    createTasks(@Body() task: CreateTaskDto) {
        return this.taskService.addTask(task);
    }

    @Put(':id')
    updateTasks(@Param('id') id: string, @Body() task: UpdateTaskDto ) {
        return this.taskService.updateTask(Number(id), task);
    }

    @Patch()
    patchTasks() {
        return this.taskService.patchTask();
    }

    @Delete()
    deleteTasks() {
        return this.taskService.deleteTask();
    }

}
