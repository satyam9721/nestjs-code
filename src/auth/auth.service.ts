import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
//writing logic with functions
registerUser()
{
    return { message: 'User registered sucessfully!'};
}
}
