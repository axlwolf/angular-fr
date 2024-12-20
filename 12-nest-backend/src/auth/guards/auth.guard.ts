import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {JwtPayload} from "../interfaces/jwt-payload";
import * as process from "node:process";
import {AuthService} from "../auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwtService: JwtService,
        private authService: AuthService,
    ) {
    }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        console.log({token});

        if (!token) {
            throw new UnauthorizedException("There is not bearer token");
        }

        try {
            const payload = await this.jwtService.verifyAsync<JwtPayload>(token,
                {
                    secret: process.env.JWT_SEED
                }
            );

            const user = await this.authService.findUserById(payload.id);

            if (!user) throw new UnauthorizedException("User not found");
            if (!user.isActive) throw new UnauthorizedException("User is not active");

            console.log({user})

            request['user'] = user;

        } catch (e) {
            throw new UnauthorizedException(e);
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers['authorization']?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
