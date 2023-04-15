import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthResponse } from './object/auth-response.object';

import { LoginInput } from './inputs/login.input';
import { CreateUserInput } from 'src/users/inputs/create-user.input';

import { AuthService } from './auth.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async signup(
    @Args('SignupInput') signupInput: CreateUserInput,
  ): Promise<AuthResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => AuthResponse)
  async login(
    @Args('LoginInput') loginInput: LoginInput,
  ): Promise<AuthResponse> {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}
