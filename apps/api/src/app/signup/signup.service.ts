import { Injectable, BadRequestException } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Model } from "mongoose";
import { SignUpInterface } from "./signup.model";
import * as bcrypt from  'bcrypt'


@Injectable()
export class SignUpservice {
    constructor(@InjectModel ('users') private signupModel: Model<SignUpInterface>) {}

    async User(name: string,email: string, password:string) {
        const hashPassword = await bcrypt.hash(password, 8)
        const new_user = new this.signupModel({name ,email, password: hashPassword})
        await new_user.save()
    }
}

