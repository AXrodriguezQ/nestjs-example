import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor( private userService: UsersService ) {}

    @ApiTags('users')
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    
    @ApiTags('users')
    @Post()
    @HttpCode(201)
    createUser( @Body() body: CreateUserDto ) {
        return this.userService.createUser( body );
    }

}
