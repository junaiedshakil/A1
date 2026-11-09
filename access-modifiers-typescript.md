Introduction : 
Access modifiers control where class members can be accessed. TypeScript provides public, private, and protected to express visibility,
while readonly prevents reassignment after initialization. Choosing the correct modifier helps make class APIs predictable and protects
internal implementation details.

Detailed Explanation
A public member is accessible from anywhere. It is the default visibility when no modifier is written.

class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Mina");
console.log(user.name); 

A private member can be accessed only inside the class where it is declared. A subclass cannot directly access it.

class Employee {
    private salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }
}

A protected member is accessible inside its declaring class and its subclasses, but not through an ordinary instance from outside.

class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Manager extends Person {
    getLabel(): string {
        return `Manager: ${this.name}`;
    }
}


The readonly modifier allows a property to be assigned during declaration or in the constructor, but prevents later reassignment.

class Product {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}


TypeScript's private and protected modifiers are primarily compile-time restrictions. JavaScript's native #private fields provide
runtime-enforced privacy.

Conclusion
Use public for intended class APIs, private for implementation details, and protected when subclasses need access. Use readonly for
values that should not be reassigned after initialization. Together, these modifiers support clearer and more maintainable object-oriented
code.