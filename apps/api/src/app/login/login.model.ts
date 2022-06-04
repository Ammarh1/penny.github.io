export class loginModel {
    constructor(
        public id: string, 
        public name: string, 
        public email: string, 
        public password: string
    ){}
}

export interface loginInterface {
    id: string;
    name: string;
    email: string; 
    password: string;
}