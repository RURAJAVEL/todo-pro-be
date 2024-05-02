import { Inject, Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { TODO_REPOSITORY } from 'src/utils/constant';

@Injectable()
export class TodoService {

    constructor(
      @Inject(TODO_REPOSITORY) private readonly todoRepository: typeof Todo
    ) {}
      
    getTodos(): Promise<Todo[]> {
      return this.todoRepository.findAll();
    }

    async createTodo(todoDto: any): Promise<Todo> {
      const user = new Todo(todoDto);
      return await user.save();
    }

    async updateTodo(id: number, todoDto: any): Promise<[number, Todo[]]> {
      const [affectedCount, affectedRows] = await this.todoRepository.update(todoDto, {
        where: { id },
        returning: true, 
      });
      return [affectedCount, affectedRows as Todo[]];
    }
  
    async deleteTodo(id: number): Promise<number> {
      return this.todoRepository.destroy({ where: { id } });
    }

    
}
