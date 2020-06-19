/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 -  this.yearOfBirth);
}     

Person.prototype.lastName = 'Smith';

var john = new Person('John',1990,'teacher');

var jane = new Person('Jane', 1996, 'designer');
var mark = new Person('Mark', 1948 ,'retired');



john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//object create
/*var personProto = {
    calculateAge : function(){
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1999;
john.job ='teacher';

var jane = Object.create(personProto,{
    name :{value : 'Jane'},
    yearOfBirth : { value : 1969},
    job :{ value :'designer'}
});*/


//primitives 
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//objects 
var obj1 = {
    name :'John',
    age : 26
}

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// functions
var age = 27;
var obj ={
    name :'Jonas',
    city : 'Lisbon'
};

function change(a,b){
    a =38 ;
    b.city =' San francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


