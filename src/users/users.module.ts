import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService, PrismaService],
    imports: [forwardRef(() => AuthModule)],
    exports: [UsersService]
})
export class UsersModule {}
