class Entity {
    constructor ({name, level, maxHealth, health, defense}) {
        this.name = name;
        this.level = level;
        this.maxHealth = maxHealth;
        this.health = health;
        this.defense = defense;
    }

    damage (amount) {
        this.health - (amount - ( amount * calc.damageReduction({defense}) ));
        
    }
  
}

