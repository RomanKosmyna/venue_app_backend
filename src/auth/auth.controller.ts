import { Body, Controller, HttpException, HttpStatus, NotFoundException, Post } from '@nestjs/common';
import { UserDto } from 'src/users/interfaces';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService) { }

    @Post("signup")
    async signUp(@Body() userData: UserDto): Promise<boolean> {
        await this.usersService.createUser(userData);

        return true;
    }
}
