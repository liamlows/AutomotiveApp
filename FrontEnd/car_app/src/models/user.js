import { Component } from 'react';

export class User extends Component {
    constructor(email, password, fName, lName, insurancePhone, insuranceNum, insuranceCompany, shopNum, shopName) {
        // this.email = email;
        // this.password = password;
        // this.fName = fName;
        // this.lName = lName;
        // this.insurancePhone = insurancePhone;
        // this.insuranceNum = insuranceNum;
        // this.insuranceCompany = insuranceCompany;
        // this.shopNum = shopNum;
        // this.shopName = shopName;
        super();


    }

    changeAccountInfo(email=this.email, password=this.password, fName=this.fName, lName=this.lName, 
        insurancePhone=this.insurancePhone, insuranceNum=this.insuranceNum, insuranceCompany=this.insuranceCompany, shopNum=this.shopNum, shopName=this.shopName ){
            this.email = email;
            this.password = password;
            this.fName = fName;
            this.lName = lName;
            this.insurancePhone = insurancePhone;
            this.insuranceNum = insuranceNum;
            this.insuranceCompany = insuranceCompany;
            this.shopNum = shopNum;
            this.shopName = shopName;
        }
}