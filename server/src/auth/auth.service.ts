import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { compare, hash } from 'bcryptjs';

import { UserEntity } from 'src/users/entities/user.entity';
import { TokenResponse } from './object/token.object';
import { CreateUserInput } from 'src/users/inputs/create-user.input';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupInput: CreateUserInput): Promise<TokenResponse> {
    const user = await this.userRepository.findOne({
      where: { email: signupInput.email },
    });

    if (user) {
      throw new Error('User with this email exsist');
    }

    const hashedPass = await hash(signupInput.password, 10);
    const newUser = await this.userRepository.save({
      ...signupInput,
      password: hashedPass,
    });

    const payload = { id: newUser.id, email: newUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(email: string, password: string): Promise<TokenResponse> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('No user with such email');
    }

    const isCorrectPassword = await compare(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException({ message: 'Password is incorrect' });
    }

    const payload = { id: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
