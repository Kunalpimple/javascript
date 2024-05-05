//write a javascript function to create a copy of an object. The copy should take care of common reference.
const expense1={

    name : "kunal",
    amount : 6000,
    modeOfPayment : "online",
    description: "Rent",
    address: {
        Flat : "106",
        Street : "station road",
        state : "maharashtra"
        
    }
}

 

const expense3 = {...expense1} //create a shallow copy using spread operator.

const expense4 =  JSON.parse(JSON.stringify(expense1));  //create a deep copy.
expense4.address.state = "Goa";       //changed the "state" of expense4 but it did not changed the "state" of expense1. 

