import AbstractProductA from "../products/AbstractProductA.js";
import AbstractProductB from "../products/AbstractProductB.js";

interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

export default AbstractFactory;