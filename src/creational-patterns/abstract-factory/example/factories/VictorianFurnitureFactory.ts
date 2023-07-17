import Chair from "../products/Chair.js";
import CoffeTable from "../products/CoffeTable.js";
import Sofa from "../products/Sofa.js";
import FurnitureFactory from "./FurnitureFactory.js";

class VictorianChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on Victorian chair");
    }
}

class VictorianSofa implements Sofa {
    isLarge(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on Victorian sofa");
    }
}

class VictorianCoffeTable implements CoffeTable {
    isFancy(): boolean {
        return true;
    }

    move(): void {
        console.log("Moving Victorian coffe table");
    }
}

class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): VictorianChair {
        return new VictorianChair();
    }

    createSofa(): VictorianSofa {
        return new VictorianSofa();
    }

    cretaeCoffeTable(): VictorianCoffeTable {
        return new VictorianCoffeTable();
    }
}

export default VictorianFurnitureFactory;