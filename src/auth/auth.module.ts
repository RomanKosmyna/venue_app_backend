import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
    imports: [forwardRef(() => UsersModule)],
    exports: [AuthService]
})
export class AuthModule {}
