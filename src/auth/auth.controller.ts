import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/users/interfaces';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService) {}

    @Post("signup")
    async signUp(@Body() userData: UserDto) {
        const registrationStatus = await this.usersService.createUser(userData);

        return { message: "Registration successful", data: registrationStatus}
    }
}
