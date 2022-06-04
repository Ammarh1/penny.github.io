import { MongooseModule } from '@nestjs/mongoose';
import { SignUpModel } from './signup.model';
import { SignUpservice } from './signup.service';
import { SignupController } from './signup.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [MongooseModule.forFeature([{name: "users" , schema: SignUpModel}])],
    controllers: [SignupController],
    providers: [SignUpservice]
})
export class SignUpModule{}