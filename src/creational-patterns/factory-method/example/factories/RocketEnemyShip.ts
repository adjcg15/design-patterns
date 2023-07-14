import EnemyShip from "../enemy-ships/EnemyShip.js";
import EnemyShipFactory from "./EnemyShipFactory.js";

class RocketEnemyShip implements EnemyShip {
    name: string;
    amtDamage: number;

    constructor(name: string) {
        this.name = name;
        this.amtDamage = 0;
    }

    followHeroShip() {
        console.log("I'm a Rocket enemy and I'm following the hero ship");
    }

    displayEnemyShip() {
        console.log("Displaying Rocket enemy ship " + this.name + "...");
    }

    enemyShipShoots() {
        console.log("Shooting Rocket enemy with damage: " + this.amtDamage + "pt");
    }

    setDamage(damage: number) {
        this.amtDamage = damage;
    }

    getDamage() {
        return this.amtDamage;
    }
}

class RocketEnemyShipFactory extends EnemyShipFactory {
    makeEnemyShip(name: string): EnemyShip {
        return new RocketEnemyShip(name);
    }
}

export default RocketEnemyShipFactory;