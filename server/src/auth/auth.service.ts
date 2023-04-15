import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';

import { UsersService } from 'src/users/users.service';
import { AuthResponse } from './object/auth-response.object';
import { CreateUserInput } from 'src/users/inputs/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupInput: CreateUserInput): Promise<AuthResponse> {
    const user = await this.userService.getUserByEmail(signupInput.email);

    if (user) {
      throw new Error('User with this email exsist');
    }

    const hashedPass = await hash(signupInput.password, 10);
    const newUser = await this.userService.createUser({
      ...signupInput,
      password: hashedPass,
    });

    const payload = { id: newUser.id, email: newUser.email };
    return {
      user: newUser,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new Error('No user with such email');
    }

    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException({ message: 'Password is incorrect' });
    }

    const payload = { id: user.id, email: user.email };
    return {
      user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
