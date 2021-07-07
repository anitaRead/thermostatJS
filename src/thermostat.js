class Thermostat {
    constructor() {
        this.temperature = 20;
        this.powerSavingOn = true;
    }
    
    temp() {
        return this.temperature;
    };

    up() {
        if (this.temperature === 25 && this.powerSavingOn === true) {
            throw new Error ("Maximum temperature is 25 degrees in power saving mode!");
        } else if (this.temperature === 32 && this.powerSavingOn === false) {
            throw new Error ("Maximum temperature is 32 degrees!");
        } else {
            this.temperature++;
        };
        
    };

    down() {
        if (this.temperature === 10) {
            throw new Error ("Minimum temperature is 10 degrees!");
        }

        this.temperature--;
    };

    powerSavingMode(option) {
        this.powerSavingOn = option;
    };

    reset() {
        this.temperature = 20; 
    };

    usage() {
        if (this.temperature < 18) {
            return "low usage";
        } else if (this.temperature <= 25) {
            return "medium usage";
        } else {
            return "high usage";
        }
    };
};