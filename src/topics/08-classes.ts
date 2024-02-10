export class Person {
    constructor(
        public firstName: string, 
        public lastName: string,
        private address: string = 'No address',
    ) {}
}

// export class Hero extends Person {
    
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, 'Oviedo');
//     }
// }

export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'Oviedo');

const ironman = new Hero("Ironman", 45, 'Tony', tony);

console.log(ironman);