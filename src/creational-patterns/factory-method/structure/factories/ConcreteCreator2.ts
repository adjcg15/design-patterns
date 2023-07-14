import Creator from "./Creator.js";
import Product from "../products/Product.js";

class ConcreteProduct2 implements Product {
    public operation(): string {
        return "Hi, I'm a concrete product of type 2";
    }
}

class ConcreteCreator2 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct2();
    }
}

export default ConcreteCreator2;