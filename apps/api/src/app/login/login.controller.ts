import { BadRequestException, Body, Controller, Post, Get,Req, Res, UnauthorizedException } from '@nestjs/common';
import { loginService } from './login.service';
import * as bcrypt from  'bcrypt'
import {JwtService} from '@nestjs/jwt'
import {Response, Request} from 'express' 


@Controller()
export class LoginController {
    constructor(private loginservice: loginService,
        private jwtservice: JwtService) {}


    @Post('login')
    async NewLogin(
    @Body('email') email: string, 
    @Body ('password') password:string,
    @Res({passthrough: true}) response: Response
    ){
         const user = await this.loginservice.findOne({email:email});
         console.log(user)
         
         if (!user) {
             throw new BadRequestException("invalid email or password")
         }

         if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException("invalid password")
         }

         const jwt = await this.jwtservice.signAsync({id: user.id})

         response.cookie('jwt', jwt, {httpOnly:true})

         return {message: "success"};
    }

    @Get('product')
    async users(@Req() req: Request) {
        try {
        const cookie = req.cookies['jwt']
        const data = await this.jwtservice.verifyAsync(cookie)
        
        if (!data){
            throw new UnauthorizedException({message: "You Are Authorized"});
        }

        return {message: "You Are Authorized"}

        
        }catch(e) {
            throw new UnauthorizedException({message: "Error: You Are Not Authorized"});
        }

    }


    @Post('logout')
    async Logout (@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt')
        return {message: "logout successfully"}

    }
}
