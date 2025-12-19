import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './create-users.dto';
import { AuthGuard } from './auth.guard';

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
  @UseGuards(AuthGuard)
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.getUserById(id);
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
