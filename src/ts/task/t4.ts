// Create a Generic API Response Type

// success | error

// Use a discriminated union with success.


// descrimination -> interface 

interface Person1  {
    origin : string,
    character1 : string
}
interface Person2 {
    origin : string,
    character2 : string
}


// intersection with common field 

// type Entity = {name : string } & (Person1 | Person2)


interface BaseEntity {
  name: string
}

type BaseEntityV2 = {
  [K in keyof BaseEntity]? : BaseEntity[K]
}

interface Person extends BaseEntityV2 {
  type: "Person"
  roles: ("engineer" | "technician" | "supervisor")[]
}

interface Robot extends BaseEntityV2 {
  type: "Robot"
  task: "packaging" | "transport" | "maintenance"
}

type Entity = Person | Robot


function TypeEntities<T>(args : T) : T {
    return args
}

console.log(TypeEntities<Entity>({type : "Robot", task : "packaging"}))



interface PersonType {
  type: "Person",
  roles: ("engineer" | "technician" | "supervisor")[]
}

interface RobotType {
  type: "Robot",
  task: "packaging" | "transport" | "maintenance"
}

type TypeCheck = {name?: string} &  (PersonType | RobotType)

function returnTypeCheck<T>(args : T) : T {
  return args
}

console.log(returnTypeCheck<TypeCheck>({type :"Person", roles : ["technician"]}))