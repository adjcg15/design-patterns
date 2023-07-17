import AbstractProductA from "../products/AbstractProductA.js";
import AbstractProductB from "../products/AbstractProductB.js";
import AbstractFactory from "./AbstractFactory.js";

class ConcreteProductA2 implements AbstractProductA {
    usefulFunctionA(): string {
        return "Te result of the product A2";
    }
}

class ConcreteProductB2 implements AbstractProductB {
    usefulFunctionB(): string {
        return "Te result of the product B2";
    }

    anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

export default ConcreteFactory2;