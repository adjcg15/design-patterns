import EnemyShip from "../enemy-ships/EnemyShip.js";

abstract class EnemyShipFactory {
    abstract makeEnemyShip(name: String): EnemyShip;
}

export default EnemyShipFactory;