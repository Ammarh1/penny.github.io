import {  } from '@nestjs/mongoose';
import { SignUpservice } from './signup.service';
import { Controller, Body, Post, UseFilters, BadRequestException } from '@nestjs/common';


@Controller('signup')
export class SignupController {
    constructor (private signupservice: SignUpservice) {}

    @Post()
    NewSignup (@Body('email') email: string, 
    @Body ('password') password:string,
    @Body ('name') name:string): any {
       
       // console.log ('controller', name)
        this.signupservice.User (name,email,password)

        return {Message: "Sign up successfully"}
        
    }
}
