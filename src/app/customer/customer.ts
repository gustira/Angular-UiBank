export class customer{
    cif: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    username: string;
    password: string;

    constructor(cif, firstName, lastName, birthDate, username, password){
        this.cif=cif;
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDate=birthDate;
        this.username=username;
        this.password=password;
    }
}