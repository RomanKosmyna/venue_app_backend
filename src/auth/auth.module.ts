import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({ secret: 'hard!to-guess_secret' })],
    exports: [AuthService]
})
export class AuthModule { }
