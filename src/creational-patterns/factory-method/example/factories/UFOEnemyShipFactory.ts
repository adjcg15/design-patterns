import EnemyShip from "../enemy-ships/EnemyShip.js";
import EnemyShipFactory from "./EnemyShipFactory.js";

class UFOEnemyShip implements EnemyShip {
    name: string;
    amtDamage: number;

    constructor(name: string) {
        this.name = name;
        this.amtDamage = 0;
    }

    followHeroShip() {
        console.log("I'm a UFO enemy and I'm following the hero ship");
    }

    displayEnemyShip() {
        console.log("Displaying UFO enemy ship " + this.name + "...");
    }

    enemyShipShoots() {
        console.log("Shooting UFO enemy with damage: " + this.amtDamage + "pt");
    }

    setDamage(damage: number) {
        this.amtDamage = damage;
    }

    getDamage() {
        return this.amtDamage;
    }
}

class UFOEnemyShipFactory extends EnemyShipFactory {
    makeEnemyShip(name: string): EnemyShip {
        return new UFOEnemyShip(name);
    }
}

export default UFOEnemyShipFactory;