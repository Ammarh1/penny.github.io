import { SignUpModel } from './../signup/signup.model';
import { MongooseModule } from '@nestjs/mongoose';
import { loginService } from './login.service';
import { LoginController } from './login.controller';
import { Module } from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt"

@Module({
    imports: [MongooseModule.forFeature([{name: "users" , schema: SignUpModel}]),
    JwtModule.register({
        secret: ":cN%NZzcOs;l0y",
        signOptions:{expiresIn: "8h"}
      })],
    controllers:[LoginController],
    providers: [loginService]
}
)
export class loginModule {}