import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from 'src/users/entities/user.entity';

import { RemoveUserResponse } from './objects/remove-response.object';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...userInput });
  }

  async getUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update(
      { id: updateUserInput.id },
      { ...updateUserInput },
    );
    return await this.getUser(updateUserInput.id);
  }

  async removeUser(id: number): Promise<RemoveUserResponse> {
    await this.userRepository.delete({ id });
    return { message: `User ${id} - DELETED` };
  }
}
