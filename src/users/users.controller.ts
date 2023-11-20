import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { Request, response } from 'express';

import { UsersService } from './users.service';
import { UserDto } from 'src/users/interfaces';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    // @Post()
    // async create(@Body() user: UserDto): Promise<UserDto> {
    //     const createdUser = this.usersService.create(user);
    //     return createdUser;
    // }

    // @Get()
    // async findAll(): Promise<UserDto[]> {
    //     return this.usersService.findAll();
    // }
}
