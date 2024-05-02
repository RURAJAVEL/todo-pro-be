import { Todo } from "./todo.model";
import { TODO_REPOSITORY } from '../../utils/constant';

export const todosProviders = [{
    provide: TODO_REPOSITORY,
    useValue: Todo,
}];