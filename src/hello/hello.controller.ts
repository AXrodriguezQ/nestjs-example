import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';

@Controller('hello')
export class HelloController {

    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    @Get('notfound')
    @HttpCode(404)
    getHelloNotFound(): string {
        return '404 Not found';
    }

    @Get('error')
    @HttpCode(500)
    getHelloError(): string {
        throw new Error('500 Internal Server Error');
    }

    @Get('redirect')
    @HttpCode(301)
    getHelloRedirect(): string {
        return '301 Moved Permanently';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('active/:status')
    getStatus(@Param('status', ParseBoolPipe) status: boolean) {
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        return `Hello ${query.name}, you are ${query.age + 10} years old`;
    }

    @Get('access')
    @UseGuards(RoleGuard)
    access() {
        return 'Access granted';
    }

}
