// Dry Code (Don't Repeat Yourself):
// You don't have to write StringBox, NumberBox, and UserBox. You just write Box<T>.



// WISE: We know T has an 'id' property
function logId<T extends { id: string }>(item: T) {
  console.log(item.id);
}




// Usage

type User = {
    name : string,
    age? : number
}
interface ApiResponse<T> {
  data: T;
  status: number;
}

// Now this one interface works for Users, Products, or Orders!
try {
    // const userResponse: ApiResponse<User> = { data: { name: "Leo", age: 10 }, status: 200 }; 
    // this needs age to be explicitly set
    const userResponse: ApiResponse<User> = { data: { name: "Leo" }, status: 200 }; 
    // using the optional chain, this becomes dynamic
    
} catch(err) {
    console.log("Error --> ", err)
}



class NamedValue<T> {
  private _value: T | undefined; // init value from T type

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value; // set value type T with 
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
                        // put type
let value = new NamedValue<number>('myNumber'); // init constructor type string name
value.setValue(10);
console.log(value.toString()); // myNumber: 10




