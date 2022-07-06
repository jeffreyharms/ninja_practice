class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }


    sayName() {
        console.log(this.name);
    }


    showStats() {
        console.log("name: " + this.name, "health: " + this.health, "speed: " + this.speed, "strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

const ninja1 = new Ninja("Raiden");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();