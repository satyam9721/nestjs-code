import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/registerUser.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'; // importing bcrypt for password hashing





@Injectable()
export class AuthService {
constructor(private readonly userService: UserService){}
//writing logic with functions
async  registerUser(registerUserDto: RegisterDto)
{ console.log(registerUserDto)

    const hash = await bcrypt.hash(registerUserDto.password, 10); // hashing password using bcrypt with salt rounds of 10



    // logic to register user
    // 1. check if user already exists in database
    // 2. if not exists, hash the password
    // 3. save user to database
    // 4. genrate JWT token for user
    // 5. send token in response







    return this.userService.createUser({ ...registerUserDto, password: hash }); // calling userService's createUser method to create user and return response
}
}
