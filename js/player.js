class Player {
    constructor ({health, maxHealth, strength, intelligence, defense}){
        this.stats = {};
        this.stats.health = health;
        this.stats.maxHealth = maxHealth;
        this.stats.strength = strength;
        this.stats.intelligence = intelligence;
        this.stats.defense = defense;
    }
}