class Entity {
    constructor ({name, level, maxHealth, health, defense, id}) {
        this.name = name;
        this.level = level;
        this.maxHealth = maxHealth;
        this.health = health;
        this.defense = defense;
        this.id = id;
    }

    damage (amount) {
        this.health - (amount - ( amount * calc.damageReduction({defense}) ));
    }
  
}

const Entities = {
    
}

const searchEntityDB = (query) => {
    for(entity in Entities){
        if(Entities[entity].id === query){
            return Entities[entity];
        }
    }
};