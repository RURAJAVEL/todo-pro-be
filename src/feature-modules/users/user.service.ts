import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { USER_REPOSITORY } from '../../utils/constant';

@Injectable()
export class UserService {

    constructor(
      @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
    ) {}
      
    getUsers(): Promise<User[]> {
      return this.userRepository.findAll();
    }
  
    getUser(id: number): Promise<User | null> {
      return this.userRepository.findOne({ where: {id} });
    }

    async createUser(userDto: any): Promise<User> {
      const user = new User(userDto);
      return await user.save();
    }

    async updateUser(id: number, userDto: any): Promise<[number, User[]]> {
      const [affectedCount, affectedRows] = await this.userRepository.update(userDto, {
        where: { id },
        returning: true, 
      });
      return [affectedCount, affectedRows as User[]];
    }
  
    async deleteUser(id: number): Promise<number> {
      return this.userRepository.destroy({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
      return await this.userRepository.findOne({ where: {email} });
    }

}
