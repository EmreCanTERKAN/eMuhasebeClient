export class CompanyModel {
    id : string = "";
    name : string = "";
    fullAddress : string = "";
    isDeleted : boolean = false;
    taxDepartment : string = "";
    taxNumber : string = "";
    database : DatabaseModel = new DatabaseModel();
}

export class LoginResponseCompanyModel{
    Id : string = "";
    Name : string = "";
}

export class DatabaseModel {
    server : string = "";
    databaseName : string = "";
    userId : string = "";
    password : string = "";
}

