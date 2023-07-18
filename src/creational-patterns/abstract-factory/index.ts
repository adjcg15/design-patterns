import DecoArtFurnitureFactory from "./example/factories/DecoArtFurnitureFactory.js";
import FurnitureFactory from "./example/factories/FurnitureFactory.js";
import ModernFurnitureFactory from "./example/factories/ModernFurnitureFactory.js";
import VictorianFurnitureFactory from "./example/factories/VictorianFurnitureFactory.js";

function useFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeTable = factory.cretaeCoffeTable();

    chair.sitOn();
    sofa.sitOn();
    coffeTable.move();
}

console.log("Victorian furnitue");
useFurniture(new VictorianFurnitureFactory());
console.log("");

console.log("DecoArt furnitue");
useFurniture(new DecoArtFurnitureFactory());
console.log("");

console.log("Modern furnitue");
useFurniture(new ModernFurnitureFactory());
console.log("");