import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common/decorators";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ParseIntPipe } from "@nestjs/common";
@Controller('user')
export class UserController {

    // private userService;
    // constructor(){
    //     this.userService = new UserService();
    // }
    constructor(private userService: UserService){}

    @Get()
    getAllUser(){
        return this.userService.get();
    }

    @Post()
    store(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }
    
    @Patch('/:userId')
    update(@Body() updateUserDto: UpdateUserDto , @Param('userId', ParseIntPipe) userId: number){
        return this.userService.update(updateUserDto, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.show(userId);
    }

    @Delete("/:userId")
    deleteUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.delete(userId);
    }
}
