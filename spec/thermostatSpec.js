describe ("Thermostat", () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    it("starts at 20 degrees", () => {
        expect(thermostat.temp()).toEqual(20);
    });

    it("increases temperature by up function", () => {
        thermostat.up();
        expect(thermostat.temp()).toEqual(21);
    });

    it("decreases temperature by down function", () => {
        thermostat.down();
        expect(thermostat.temp()).toEqual(19);
    });

    it("checks the minimum temperature is 10 degrees", () => {
        for (let i=0; i < 10; i++) {
            thermostat.down();
        };
        expect(() => { thermostat.down(); }).toThrow(new Error ("Minimum temperature is 10 degrees!"));
    });

    it("resets temperature to 20 degrees", () => {
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.reset();
        expect(thermostat.temp()).toEqual(20);
    });

    describe("power saving mode is on", () => {

        it("checks power saving mode is on by default", () => {
            expect(thermostat.powerSavingOn).toEqual(true);
        });
        
        it("checks max temperature is 25 degrees", () => {
            
            thermostat.powerSavingMode(true);

            for (let i=0; i < 5; i++) {
                thermostat.up();
            };
            expect(() => { thermostat.up(); }).toThrow(new Error ("Maximum temperature is 25 degrees in power saving mode!"));

        });
    });

    describe("power saving mode is off", () => {
        
        it("checks max temperature is 32 degrees", () => {
            
            thermostat.powerSavingMode(false);

            for (let i=0; i < 12; i++) {
                thermostat.up();
            };
            expect(() => { thermostat.up(); }).toThrow(new Error ("Maximum temperature is 32 degrees!"));

        });
    });

    // < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
    describe("Energy usage", () => {

        it("checks for low usage with temperature below 18", () => {
            thermostat.down();
            thermostat.down();
            thermostat.down();
            expect(thermostat.usage()).toEqual("low usage");
        });

        it("checks for medium usage with temperature between 18 and 25", () => {
            expect(thermostat.usage()).toEqual("medium usage");
        });
        
        it("checks for high usage with temperature above 25", () => {
            thermostat.powerSavingMode(false);

            for(let i=0; i < 6; i++) {
                thermostat.up();
            }
            expect(thermostat.usage()).toEqual("high usage");
        });

    });

});