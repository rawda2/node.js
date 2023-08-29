

// multiple inheritance un JS
//use the **prototype** property. The prototype property of an object is a reference to the object that
// was used to create it. This means that you can add properties and methods to the prototype of an object,
 // and those properties and methods will be available to all objects that are created from that prototype.

 function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  function Doctor(name, specialty) {
    Person.call(this, name);
    this.specialty = specialty;
  }
  Doctor.prototype = Object.create(Person.prototype);
  Doctor.prototype.constructor = Doctor;
  Doctor.prototype.treatPatient = function() {
    console.log(`I am a doctor, and I am treating a patient.`);
  };
  const person = new Person('John Doe');
  person.sayHello(); // Hello, my name is John Doe.
  const doctor = new Doctor('Jane Doe', 'Surgery');
  doctor.sayHello(); // Hello, my name is Jane Doe.
  doctor.treatPatient(); 

  //
  //Overloading is when a class has multiple methods with the same name, but with different parameters.
  // When a static method is overloaded, the compiler will choose the method to call based on the types of the 
  //arguments that are passed to it. satic methodes compiled in compiled time not run time