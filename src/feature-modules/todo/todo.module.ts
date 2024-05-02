import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { todosProviders } from './todos.providers';

@Module({
  controllers: [TodoController],
  providers: [TodoService, ...todosProviders]
})
export class TodoModule {}
