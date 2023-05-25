class calculation {
    initialDamage ({weaponDamage, strength}) {
        let damage = ( 1 + weaponDamage ) * ( strength / 100 );
        return damage;
    }

    damageMultiplier ({combatLevel, weaponBonus, enchants}) {
        let multiplier = 1 + ( combatLevel * 0.02 ) + enchants + weaponBonus;
        return mulitplier;
    }

    finalDamage ({initial_Damage, damage_Multiplier, armorBonus}) {
        let damage = initial_Damage * damage_Multiplier * (1 + armorBonus);
        return damage;
    }

    damageReduction ({defense}) {
        let reductionPercent = defense / ( defense + 100 );
        return reductionPercent;
    }
}

const calc = new calculation();