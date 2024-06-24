#! /usr/bin/env node

interface ibankaccount{
    credit (amount : number): void;
    debit (amount : number) : void;
}

//class 
class Bankaccount implements ibankaccount {
    accountbalance : number;
    constructor (accountbalance: number) {
        this.accountbalance = accountbalance
    }


//publiculy credit:
public credit (amount: number) {
    if (amount > 0){
        this.accountbalance += amount
        console.log("credit successfuly get into new account and your balance is :"+this.accountbalance);

    }
    else{
        console.log("credit unsuccessfuly")
    }
}

//publiculy debit
public debit (amount: number) {
    if (amount > 0 && amount < this.accountbalance){
        this.accountbalance -= amount
        console.log("debit successfuly share in new account balance :"+this.accountbalance);

    }
    else{
        console.log("debit unsuccessfuly")
    }
}

}

class Customer {
    person : {
        firstname: string;
        lastname: string;
    }
    age: number;
    gender: string;
    mobile_number : number;
    bankaccount: Bankaccount;

    constructor(person: {firstname:string, lastname:string}, age: number, gender:string, mobile_number: number, bankaccount:Bankaccount){
        //this property utilization
        this.person=person;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
        this.bankaccount = bankaccount;
    }

    //publically user access
    public display(){
        console.log("Name: "+this.person.firstname+" "+this.person.lastname);
        console.log("Age:" +this.age)
        console.log("Gender:" +this.gender)
        console.log("Mobile Number:" +this.mobile_number)
        console.log("Amount in Bank:" +this.bankaccount.accountbalance)
        console.log()
    }

}

const a1 = new Bankaccount(800);
const c1 = new Customer ( {firstname: "Sidra", lastname: "Masood"}, 32, "female", 5489154627,a1);
c1.display()
c1.bankaccount.debit(400)
console.log()


const a2 = new Bankaccount(800);
const c2 = new Customer ( {firstname: "Nazia", lastname: "faisal"}, 35, "female", 4121679866,a2);
c2.display()
c2.bankaccount.debit(100)
console.log()