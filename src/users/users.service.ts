import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { UserDto } from 'src/users/interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
        private prismaService: PrismaService,
        private authService: AuthService
    ) { }

    async createUser(userData: UserDto): Promise<boolean> {
        try {
            const hashedPassword = await this.authService.hashPassword(userData.password);
            
            await this.prismaService.user.create({
                data: {
                    email: userData.email,
                    password: hashedPassword
                }
            });
            
            return true;
        }
        catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    async findUser(email: string) {
        try {
            const user = await this.prismaService.user.findUnique({
                where: {
                    email: email
                }
            });

            return user;
        }
        catch (error) {
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
