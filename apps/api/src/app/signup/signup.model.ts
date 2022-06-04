import mongoose from "mongoose";

export const SignUpModel = new mongoose.Schema({
    name:{ type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
})

export interface SignUpInterface {
    name: string;
    email: string; 
    password:string
}