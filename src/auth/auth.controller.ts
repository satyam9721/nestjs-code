import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';
@Controller('auth') // due to this ('auth') final endpoint to call methods would be "/auth/register"
export class AuthController {

 //1st methods   
    // authService:AuthService;

    // constructor(authService:AuthService){
    //     this.authService = authService;

    // }

//2nd methods for above replacement

constructor (private readonly authService:AuthService) {}


    @Post('register')
    register(@Body() registerUserDto:RegisterDto)
{

//taking authservice and printing things
const result = this.authService.registerUser(registerUserDto);
return result;  

}
}
