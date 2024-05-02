import { Controller, Get, Post, Delete, Param, Body, 
  // UseGuards,
   Patch } from '@nestjs/common';
// import { AccessTokenGuard } from '../../guards/access-token.guard';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('tasks')
export class TodoController {

  constructor(private todoService: TodoService) { }

  @Post()
  // @UseGuards(AccessTokenGuard)
  create(@Body() todoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(todoDto);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Patch(':id') 
  // @UseGuards(AccessTokenGuard)
  update(@Param('id') id: string, @Body() todoDto: UpdateTodoDto): Promise<[number, Todo[]]> {
    return this.todoService.updateTodo(Number(id), todoDto);
  }

  @Delete(':id')
  // @UseGuards(AccessTokenGuard)
  remove(@Param('id') id: string): Promise<number> {
    return this.todoService.deleteTodo(Number(id));
  }

}
