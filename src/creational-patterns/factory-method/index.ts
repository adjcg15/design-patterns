import RocketEnemyShipFactory from "./example/factories/RocketEnemyShip.js";
import UFOEnemyShipFactory from "./example/factories/UFOEnemyShipFactory.js";

console.log("I'm the client and I'm not aware of creator classes");
console.log("");

const UFOFactory = new UFOEnemyShipFactory();
console.log("Creating UFO enemy Ship...");
const UFOEnemy = UFOFactory.makeEnemyShip("ufo-127-li");
UFOEnemy.setDamage(25);
UFOEnemy.displayEnemyShip();
UFOEnemy.followHeroShip();
UFOEnemy.enemyShipShoots();

console.log("");

const RocketFactory = new RocketEnemyShipFactory();
console.log("Creating Rocket enemy Ship...");
const RocketEnemy = RocketFactory.makeEnemyShip("rocket");
RocketEnemy.setDamage(10);
RocketEnemy.displayEnemyShip();
RocketEnemy.followHeroShip();
RocketEnemy.enemyShipShoots();