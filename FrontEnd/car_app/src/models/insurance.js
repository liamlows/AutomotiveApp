export class Insurance {
    constructor (email, companyName, policyNumber){
        this.email = email;
        this.companyName = companyName;
        this.policyNumber = policyNumber;
    }

    changeInfo(email = this.email, companyName = this.companyName, policyNumber = this.policyNumber){
        this.email = email;
        this.companyName = companyName;
        this.policyNumber = policyNumber;
    }
}