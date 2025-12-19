import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.UsersService.getAllUsers();
  }

  // users/search?name=Marat&age=23
  // @Get('search')
  // getUserByQuery(@Query('name') name: string, @Query('age') age: string) {
  //   return `User with name: ${name} and age: ${age}`;
  // }

  // // users/1
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.UsersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDTO) {
    return this.UsersService.createUser(body);
  }

  // @Put(':id')
  // updateUser() {
  //   return 'Update user';
  // }

  // @Delete(':id')
  // deleteUser() {
  //   return 'Delete user';
  // }
}
