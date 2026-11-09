/*const multiplyValue=(value : number, multiplier ? :number): number =>{
    return value * (multiplier ?? 2);
}
console.log(multiplyValue(10))
console.log(multiplyValue(10, 5))
console.log(multiplyValue(7, 0))



const processInput=(value: number | string | boolean) : string | number =>{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value ==="number"){
        return value*10;
        
    }
    else{
        return value ? "Active" : "Inactive";
    }

}

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));




const formatCoordinate=(coordinate : readonly [number, number, string]): string=>{
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`

}
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]))
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));



const concatenateArrays= <T> (...arrays: T[][]) : T[] =>{
    return arrays.flat();

}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));




interface Course{
    title : string;
    students : number;
    isPublished :boolean;
}

const getPopularCourses=(courses : Course[], minStudents : number) : Course[] => {
    return courses.filter(course=>
        course.isPublished === true && course.students >= minStudents
    )
}


const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses,80))




const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key]);
};


const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));





class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
     getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());*/





const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};

validateAgeAsync(20)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

    validateAgeAsync(15)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));