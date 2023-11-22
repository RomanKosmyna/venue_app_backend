import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { UserDto } from 'src/users/interfaces';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private usersService: UsersService,
        private authService: AuthService
    ) { }

    @Post("signin")
    async signIn(@Body() userData: UserDto) {
        const findUser = await this.usersService.findUser(userData.email);

        if (findUser === null) {
            throw new HttpException("Email or password is incorrect.", HttpStatus.BAD_REQUEST);
        }

        const comparePasswords = await this.authService.comparePassword(userData.password, findUser.password);

        if (!comparePasswords) {
            throw new HttpException("Email or password is incorrect.", HttpStatus.BAD_REQUEST);
        }

        const token = await this.authService.generateJwtToken(findUser.id, findUser.email);

        return { message: "Successful login.", access_token: token }
    }

    @Post("signup")
    async signUp(@Body() userData: UserDto) {
        const findUser = await this.usersService.findUser(userData.email);

        if (findUser !== null) {
            throw new HttpException("User already exists.", HttpStatus.BAD_REQUEST);
        }

        await this.usersService.createUser(userData);

        return { message: "User successfully created." };
    }

    // @UseGuards(AuthGuard)
    // @Get('profile')
    // getProfile(@Request() req) {
    //     return req.user;
    // }
}
