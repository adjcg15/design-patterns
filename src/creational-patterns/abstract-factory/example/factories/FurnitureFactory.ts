import Chair from "../products/Chair.js";
import Sofa from "../products/Sofa.js";
import CoffeTable from "../products/CoffeTable.js";

interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    cretaeCoffeTable(): CoffeTable;
}

export default FurnitureFactory;