//create a function that takes input as an object and return the structure of the input object.

let user = {
    //created an object named user
    name: "kunal",       
    graduated: true,

}
//created a function 
function UserDetails(user){                 
//using type of operator to get the data type of the value.
    console.log("name: "+typeof(user.name));    
    console.log("age: "+typeof(user.age));
    console.log("graduated: "+typeof(user.graduated));

    return UserDetails();
}