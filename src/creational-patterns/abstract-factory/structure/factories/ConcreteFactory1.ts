import AbstractProductA from "../products/AbstractProductA.js";
import AbstractProductB from "../products/AbstractProductB.js";
import AbstractFactory from "./AbstractFactory.js";

class ConcreteProductA1 implements AbstractProductA {
    usefulFunctionA(): string {
        return "Te result of the product A1";
    }
}

class ConcreteProductB1 implements AbstractProductB {
    usefulFunctionB(): string {
        return "Te result of the product B1";
    }

    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

export default ConcreteFactory1;