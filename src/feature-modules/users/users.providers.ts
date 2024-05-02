import { User } from './user.model';
import { USER_REPOSITORY } from '../../utils/constant';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];