import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }

    async comparePassword(enteredPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(enteredPassword, hashedPassword);
    }

    async generateJwtToken(userId: number, email: string) {
        const payload = {sub: userId, email: email};

        return await this.jwtService.signAsync(payload);
    }
}
