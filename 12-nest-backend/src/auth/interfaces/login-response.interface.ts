import {User} from "../entities/user.entity";
import {AST} from "eslint";

export interface LoginResponse {
    user: User,
    token: string,
}