export class User{
    id: number;
    username: string;
    password: string;
    role: string;

    constructor(username: string, password: string){
        this.username = username; this.password = password;
    }
}