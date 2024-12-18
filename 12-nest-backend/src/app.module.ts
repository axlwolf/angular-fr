import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule, Schema} from '@nestjs/mongoose';

import {AuthModule} from './auth/auth.module';
import {User, UserSchema} from "./auth/entities/user.entity";

@Module({
    imports: [
        ConfigModule.forRoot(),
        //MongooseModule.forRoot('mongodb://localhost:27017/mean-db'),
        MongooseModule.forRoot(process.env.MONGO_URI),
        AuthModule,
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor() {
        console.log({env: process.env.MONGO_URI});
        console.log({env: process.env.PORT})
    }
}
