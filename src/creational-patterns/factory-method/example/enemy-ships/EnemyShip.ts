interface EnemyShip {
    name: string;
    amtDamage: number;

    followHeroShip(): void;
    displayEnemyShip(): void;
    enemyShipShoots(): void;
    setDamage(damage: number): void;
    getDamage(): number;
}

export default EnemyShip;