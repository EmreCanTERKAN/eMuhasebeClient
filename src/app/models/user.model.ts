import { CompanyUserModel } from "./company-user.model";
import { CompanyModel } from "./company.model";

export class UserModel{
    id: string = "";
    name: string = "";
    firstName: string = "";
    lastName: string = "";
    fullName: string = "";
    password: string = "";
    userName: string = "";
    email: string = "";
    companyId: string = "";
    companyIds : string[] = [];
    companyUsers : CompanyUserModel[] = [];
    companies : CompanyModel[] = [];

}