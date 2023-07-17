import Chair from "../products/Chair.js";
import CoffeTable from "../products/CoffeTable.js";
import Sofa from "../products/Sofa.js";
import FurnitureFactory from "./FurnitureFactory.js";

class DecoArtChair implements Chair {
    hasLegs(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on DecoArt chair");
    }
}

class DecoArtSofa implements Sofa {
    isLarge(): boolean {
        return true;
    }

    sitOn(): void {
        console.log("Sitting on DecoArt sofa");
    }
}

class DecoArtCoffeTable implements CoffeTable {
    isFancy(): boolean {
        return true;
    }

    move(): void {
        console.log("Moving DecoArt coffe table");
    }
}

class DecoArtFurnitureFactory implements FurnitureFactory {
    createChair(): DecoArtChair {
        return new DecoArtChair();
    }

    createSofa(): DecoArtSofa {
        return new DecoArtSofa();
    }

    cretaeCoffeTable(): DecoArtCoffeTable {
        return new DecoArtCoffeTable();
    }
}

export default DecoArtFurnitureFactory;