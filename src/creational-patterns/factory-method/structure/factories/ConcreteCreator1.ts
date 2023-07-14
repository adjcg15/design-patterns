import Creator from "./Creator.js";
import Product from "../products/Product.js";

class ConcreteProduct1 implements Product {
    public operation(): string {
        return "Hi, I'm a concrete product of type 1";
    }
}

class ConcreteCreator1 extends Creator {
    public createProduct(): Product {
        return new ConcreteProduct1();
    }
}

export default ConcreteCreator1;