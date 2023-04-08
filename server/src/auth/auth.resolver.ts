import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginInput } from './inputs/login.input';
import { TokenResponse } from './object/token.object';
import { CreateUserInput } from 'src/users/inputs/create-user.input';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => TokenResponse)
  async signup(
    @Args('sigup') signupInput: CreateUserInput,
  ): Promise<TokenResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => TokenResponse)
  async login(@Args('login') loginInput: LoginInput): Promise<TokenResponse> {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}
