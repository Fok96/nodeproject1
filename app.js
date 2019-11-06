let chalk = require("chalk");
let a = 5;
let name = "Geo rge";
console.log("my name is "+ name );
console.log(a);
console.log(155+45);
console.log(a-2);
let b = 3;
console.log(a+b);
if (a===b) {
    console.log("Tote to a einai iso me to b");
}else if(a<b) {
    console.log("a mikrotero tou b")

}else{
    console.log("B megalitero tou a")
}
let paok = "doubl";
switch (paok){
    case "ole":
        console.log("PAOK OLE!!!")
        break;
    case "double":
        console.log("!!!paok ole ole ole")
        break;
    default: 
        console.log("good luck")
}
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name[0]);
let myTable = [5,4,3,2];
console.log(myTable);   
console.log(myTable[0]);
console.log(myTable.length);//megethos pinaka
let names = ["george"];
console.log(names[0]);
names.push("Dimos");
names.push("annie");
console.log(names[1]);
for(let i=0; i < names.length; i++){
    console.log(names[i]);
}
for (let x of names){
    console.log(x);
}
names.splice(1,1);//afairei stoixeia .. 1o orisma apo poia thesi ksekinaei kai to 2o posa stoixeia svinei

console.log(names)
let languages = ["HTML","CSS","javascript","TypeScript","C","C++"]
languages.pop();//afairei to teleutaio stoixeio
console.log(languages);
languages.shift();
console.log(languages);//afairei to prwto stoixeio tou pinaka;
languages.unshift("python");//prosthaitei nea leksi stin arxi
console.log(languages)
languages.forEach(lang => {//arrow function idio me to an egrafa (function(lang))
    console.log("languages: " + lang);
})
let personA = [
    "Dimos",
    "Karadimos",
    "dimos@gmail.com",
    "Thessaloniki",
    "Greece"
];
let personB = {
    "name": "Dimos",
    "surname": "Karadimos",
    "email": "dimos@gmail.com",
    "city": "Thessaloniki",
    "country": "Greece"
}
console.log(personB["email"]);
console.log(personB.email);
console.log(chalk.blue("to onoma mou einai:"  ),personB ["name"],chalk.bgRed(" to epitheto mou: "),personB ["surname"],chalk.bgYellow(" to email mou: "),personB ["email"]," i poli mou: ",personB["city"]);
console.log(chalk.blue("hello world"))  