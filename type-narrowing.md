Introduction : 
Type narrowing is the process of refining a variable from a broad type into a more specific type. It lets TypeScript understand which
operations are safe at a particular point in the code. Narrowing is especially useful when a value has a union type, because each member of
the union may support different operations.


Detailed Explanation:
The typeof operator checks primitive types such as strings and numbers. TypeScript uses the result of the condition to narrow the variable inside that branch.

function formatValue(value: string | number): string {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    return value.toFixed(2);
}


The instanceof operator checks whether an object was created by a particular class or constructor. It is useful when handling class instances.


class Dog {
    bark() {
        return "Woof!";
    }
}

function makeSound(animal: Dog | Date): string {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    return animal.toDateString();
}

The in operator checks whether a property exists on an object. This can distinguish object types in a union.

type Admin = { name: string; permissions: string[] };
type Customer = { name: string; purchaseCount: number };

function describe(user: Admin | Customer): string {
    if ("permissions" in user) {
        return `${user.name}: ${user.permissions.join(", ")}`;
    }
    return `${user.name}: ${user.purchaseCount} purchases`;
}


These checks provide runtime evidence that TypeScript can use for compile-time type analysis. They do not change the actual value; they make the code's assumptions explicit.


Conclusion :
Type narrowing improves type safety and reduces unnecessary type assertions. Use typeof for primitive values, instanceof for class instances, and in for checking object properties. These tools make union-typed code clearer and safer.


