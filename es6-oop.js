// OOP <ES6-2017> - recommended
class PersonC {
  constructor(firstName, lastName, dob) {
    // properties
    this.fname = firstName;
    this.lname = lastName;
    // this.dob = dob;
    this.dob = (dob === undefined)? new Date(): new Date(dob);
  }

  getBirthYear = function() {
    return this.dob.getFullYear();
  }
  getFullName = function() {
    return `${this.fname} ${this.lname}`;
  }

//   getBirthYear = () => this.dob.getFullYear();
//   getFullName = () => `${this.fname} ${this.lname}`;

}

const p3 = new PersonC('Jane','Doe','15-Aug-2006');
console.log(p3);
console.log(p3.getBirthYear());
console.log(p3.getFullName());
