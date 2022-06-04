import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Model } from "mongoose";
import { loginInterface } from './login.model';

@Injectable()
export class loginService {

    constructor(@InjectModel ('users') private loginDB: Model<loginInterface>) {}


    async findOne(search: any){
        return this.loginDB.findOne(search)
    }

    

}