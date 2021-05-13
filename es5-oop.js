// OOP <ES5-2016> - constructive function
function Person(firstName, lastName, dob) {
  // properties
  this.fname = firstName;
  this.lname = lastName;
  // this.dob = dob;
  this.dob = (dob === undefined)? new Date(): new Date(dob);

  // methods - listed as properties in the object (NOT in prototype)
  /* this.getBirthYear = function () { return this.dob.getFullYear(); }
  this.getFullName = function() { return `${this.fname} ${this.lname}`; } */
}

// add prototype function
Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  return `${this.fname} ${this.lname}`;
}

// Instantiate object with constructor
const p1 = new Person('John','Doe','5-Dec-1990');
console.log(p1);
const p2 = new Person();
console.log(p2);
console.log(p1.dob.getFullYear());
console.log(p2.getBirthYear());
console.log(p1.getFullName());
