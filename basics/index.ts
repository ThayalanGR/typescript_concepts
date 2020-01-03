interface ICar {
    name: String,
    category: String,
    getOutput: () => string
}

var car: ICar = {
    name: "Toyota",
    category: "swedan",
    getOutput: (): string => {
        return "Toyota car belongs to Sweedan family"
    }
}

console.log(car.name);
console.log(car.category);
console.log(car.getOutput());
