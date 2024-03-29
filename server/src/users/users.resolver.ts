import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserEntity } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { RemoveUserResponse } from './objects/remove-response.object';
import { CreateUserInput } from 'src/users/inputs/create-user.input';
import { UpdateUserInput } from 'src/users/inputs/update-user.input';

import { UsersService } from 'src/users/users.service';

@Resolver('user')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Query(() => UserEntity)
  async getUser(@Args('id') id: string): Promise<UserEntity> {
    return await this.userService.getUser(id);
  }

  @Query(() => UserEntity)
  async getUserByEmail(@Args('email') email: string): Promise<UserEntity> {
    return await this.userService.getUserByEmail(email);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => RemoveUserResponse)
  async removeUser(
    @Args('RemoveUserInput') id: string,
  ): Promise<RemoveUserResponse> {
    return await this.userService.removeUser(id);
  }
}
