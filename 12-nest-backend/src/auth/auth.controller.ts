import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto } from './dto';
import { UpdateAuthDto } from './dto';
import { LoginDto } from './dto';
import {RegisterUserDto} from "./dto";
import {AuthGuard} from "./guards/auth.guard";
import {LoginResponse} from "./interfaces/login-response.interface";
import {User} from "./entities/user.entity";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log({createUserDto});
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Request() request: Request) {
    // console.log({request});
    // const user = request['user'];
    // return user;
    return this.authService.findAll();
  }

  // Login Response
  @UseGuards(AuthGuard)
  @Get('check-token')
  checkToken(@Request() req: Request): LoginResponse {
    console.log({req});
    const user = req['user'] as User;

    return {
      user,
      token: this.authService.getJwtToken({id: user._id})
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}