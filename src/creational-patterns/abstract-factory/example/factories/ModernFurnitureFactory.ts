import Chair from "../products/Chair.js";
import CoffeTable from "../products/CoffeTable.js";
import Sofa from "../products/Sofa.js";
import FurnitureFactory from "./FurnitureFactory.js";

class ModernChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on Modern chair");
    }
}

class ModernSofa implements Sofa {
    isLarge(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on Modern sofa");
    }
}

class ModernCoffeTable implements CoffeTable {
    isFancy(): boolean {
        return true;
    }

    move(): void {
        console.log("Moving Modern coffe table");
    }
}

class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): ModernChair {
        return new ModernChair();
    }

    createSofa(): ModernSofa {
        return new ModernSofa();
    }

    cretaeCoffeTable(): ModernCoffeTable {
        return new ModernCoffeTable();
    }
}

export default ModernFurnitureFactory;