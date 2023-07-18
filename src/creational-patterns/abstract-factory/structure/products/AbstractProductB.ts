import AbstractProductA from "./AbstractProductA.js";

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

export default AbstractProductB;