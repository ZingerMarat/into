import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './create-users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException('User with id not found');

    return user;
  }

  createUser(body: CreateUserDTO) {
    const { name, age, bio } = body;
    const user = this.userRepository.create({ name, age, bio });
    return this.userRepository.save(user);
  }
}
