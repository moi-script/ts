

// class Person {
//   name: string;
// }


// -------------------------------------------------------------------------------------------------------------------


// const person = new Person();
// person.name = "Jane";

// Members: Visibility

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any 
// classes that inherit it, which is covered in the inheritance section

// public -> anywhere
// private -> inside method only
// protected -> allowed in inheritance 



// -------------------------------------------------------------------------------------------------------------------


// class Person {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name; // they get it from the object members itself 
//   }

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName()); // person.name isn't accessible from outside the class since it's private


// -------------------------------------------------------------------------------------------------------------------




// class Person {
//   // name is a private member variable
//   public constructor(private name: string) {} // shorthand for 
//     //   private name: string;
//     // this.name = name from constructur 

//   public getName(): string {
//     return this.name;
//   }
// }

// const person = new Person("Jane");
// console.log(person.getName());




// -------------------------------------------------------------------------------------------------------------------


// Readonly
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());



// -------------------------------------------------------------------------------------------------------------------



// Implements

// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// -------------------------------------------------------------------------------------------------------------------

// Implements
// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   // getArea gets inherited from Rectangle
// }


// -------------------------------------------------------------------------------------------------------------------
// Extends
// interface Shape {
//   getArea: () => number;
// }

// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   // getArea gets inherited from Rectangle
// }





// -------------------------------------------------------------------------------------------------------------------

// Override
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string { // change  the functoin definition of before 
    return `Square[width=${this.width}]`;
  }
}




// -------------------------------------------------------------------------------------------------------------------

// Abstracts

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super(); // inherit all of the Characterics of Polygon
  }
  

  public getArea(): number {
    return this.width * this.height;
  }
}




