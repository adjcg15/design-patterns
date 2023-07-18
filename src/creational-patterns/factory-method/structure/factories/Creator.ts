import Product from "../products/Product.js";

abstract class Creator {
    public abstract createProduct(): Product;

    public someGenericOperation(): string {
        const product = this.createProduct();

        return `Polimorfism with factory method. Product message: ${product.operation()}`;
    }
}

export default Creator;