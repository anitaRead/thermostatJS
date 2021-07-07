let thermostat = new Thermostat();

let temperature = document.getElementById("current-temp");
temperature.innerHTML = thermostat.temp();

let upButton = document.getElementById("up");
upButton.addEventListener("click", () => {
    thermostat.up();
    temperature.innerHTML = thermostat.temp();
    energyUsage.innerHTML = thermostat.usage();
});

let downButton = document.getElementById("down");
downButton.addEventListener("click", () => {
    thermostat.down();
    temperature.innerHTML = thermostat.temp();
    energyUsage.innerHTML = thermostat.usage();
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    thermostat.reset();
    temperature.innerHTML = thermostat.temp();
    energyUsage.innerHTML = thermostat.usage();
});

let powerSavingOn = document.getElementById("power-saving-on");
powerSavingOn.addEventListener("click", () => {
    thermostat.powerSavingMode(true);
});

let powerSavingOff = document.getElementById("power-saving-off");
powerSavingOff.addEventListener("click", () => {
    thermostat.powerSavingMode(false);
});

let energyUsage = document.getElementById("energy-usage");
energyUsage.innerHTML = thermostat.usage();