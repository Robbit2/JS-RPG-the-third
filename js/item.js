// rarities array
const RARITIES = [
    "Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythical"
];

class Item {
    constructor ({name, rarity, tags, img}) {
        this.name = name;
        this.rarity = rarity;
        this.tags = tags;
        this.img = img;
        this.augmented = false;
    }

    augment () {
        if(!this.augmented){
            let oldRarity = RARITIES.indexOf(this.rarity);
            let newRarity = RARITIES[oldRarity + 1];
            this.rarity = newRarity;
            this.augmented = true;
            return true;
        }else{
          console.error(`Your ${this.name} has already been augmented`);
          return false;
        }
    }
}

// extended class for weapons
// crit shorthand for critical
class Weapon extends Item {
    constructor ({damage, strength, critChance, critDamage, mana}) {
        this.damage = damage;
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.mana = mana;
    }
}

class Accessory extends Item {
    constructor ({strength, critChance, critDamage, mana, health, defense}) {
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.mana = mana;
        this.defense = defense;
        this.health = health;
    }
}

class Armor extends Item {
    constructor ({strength, critChance, critDamage, mana, health, defense}) {
        this.strength = strength;
        this.critChance = critChance;
        this.critDamage = critDamage;
        this.mana = mana;
        this.defense = defense;
        this.health = health;
    }
}