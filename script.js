var itemsArray = [
    {name: "juice", price:"50", quantity:"3"},
    {name: "cookie", price:"30", quantity:"9"},
    {name: "shirt", price:"800", quantity:"1"},
    {name: "pen", price:"100", quantity:"2"},
    
]

var Totaljuice = itemsArray[0].price * itemsArray[0].quantity
var Totalcookie = itemsArray[1].price * itemsArray[1].quantity
var Totalshirt = itemsArray[2].price * itemsArray[2].quantity
var Totalpen = itemsArray[3].price * itemsArray[3].quantity

document.write("total price of juice is : " +Totaljuice  , "<br>")
document.write("total price of cookie is : " +Totalcookie  , "<br>")
document.write("total price of shirt is : " +Totalshirt  , "<br>")
document.write("total price of pen is : " +Totalpen     , "<br>")


var totalPrice = Totaljuice + Totalcookie + Totalshirt + Totalpen

document.write("total amount " + totalPrice , "<br>", "<br>" , "<br>")


//Question2

// var object = {
//     firstName : "Alex" ,
//     lastName  : "Grey" ,
//     email     : "alexgrey5000@gmail.com" ,
//     password  : "Java123" , 
//     age       : "25" ,
//     gender    : "male" ,
//     country   : "Pakistan" ,
// }

// var checkfName = object.firstName
// var checklName = object.lastName
// var checkgender = object.gender

// document.write("Name : " + checkfName , "<br>" , "<br>" , "Gender : " +checkgender)

//Question 3

function properties (Name , Gender , Age , Country )
{
            this.fullName = Name
            this.Gender = Gender
            this.Age = Age
            this.Country = Country
           
            console.log(Name , Gender , Age ,  Country )
}

var employ1 = new properties ("Faiq" , "male" , "35" , "China") 
var employ2 = new properties ("Ali" , "male" , "28", "Malaysia") 
var employ3 = new properties ("Danish" , "male" , "27" , "Pakistan") 

//Question 4



function user (Name , Gender , Address, Education , Profession)
{
    this.Name = Name;
    this.Address= Address;
    this.Gender=Gender;
    this.Education=Education;
    this.Profession=Profession;
}

var userName = document.getElementById("Name");
var userGender = document.getElementById("Gender");
var userAddress = document.getElementById("Address");
var userEducation = document.getElementById("Education");
var userProfession = document.getElementById("Profession");

var arr = [ ]
var myuser1 = new user(userName.value, userGender.value, userEducation.value , userAddress.value , userProfession.value );




