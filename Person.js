Person = function(firstName, lastName, year){
  // Properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
}

Person.prototype = Object.create( Person.prototype );
Person.prototype.constructor = Person;

Person.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName;
  //return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getAge = function(){
  let date = new Date();
    return date.getFullYear() - this.year;
}