import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
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
    const user = await this.userRepository.create({ ...signupInput });

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async login(email: string, password: string): Promise<TokenResponse> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('No user with such email');
    }

    if (user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
