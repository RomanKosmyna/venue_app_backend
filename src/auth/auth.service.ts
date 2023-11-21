import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async comparePassword(enteredPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(enteredPassword, hashedPassword);
    }
}
