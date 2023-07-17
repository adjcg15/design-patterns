import AbstractFactory from "./structure/factories/AbstractFactory.js";
import ConcreteFactory1 from "./structure/factories/ConcreteFactory1.js";
import ConcreteFactory2 from "./structure/factories/ConcreteFactory2.js";

function useFactory(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log("Testing products creation with factory 1");
useFactory(new ConcreteFactory1());

console.log("");
console.log("Testing products creation with factory 2");
useFactory(new ConcreteFactory2());