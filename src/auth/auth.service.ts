import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

//writing logic with functions
registerUser()
{
    // logic to register user
    // 1. check if user already exists in database
    // 2. if not exists, hash the password
    // 3. save user to database
    // 4. genrate JWT token for user
    // 5. send token in response




    return { message: 'User registered sucessfully!'};
}
}
