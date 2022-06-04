import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import {JwtModule} from '@nestjs/jwt'


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { loginModule } from './login/login.module';
import { SignUpModule } from './signup/signup.module';

@Module({
  imports: [loginModule, SignUpModule, MongooseModule.forRoot("mongodb+srv://Ammar:Ammar123@cluster0.44vwu0g.mongodb.net/?retryWrites=true&w=majority"),],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}
