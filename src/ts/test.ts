import { Simulation_universe } from "./class/simulation/simulation_universe";

let universe = new Simulation_universe("our_universe");
universe.matter_parameter = 1e10;
universe.has_cmb = false;
universe.has_neutrino = false;
universe.dark_energy.parameter_value = 10;
console.log(universe.matter_parameter, universe.dark_energy.parameter_value, universe.calcul_omega_r(), universe.hubble_cst)
console.log(universe.universe_age());
console.log(1.570796e-4 / universe.hubble_cst);
//console.log(universe.duration(-0.9, 0) / (3600*24*365.25*1e9));
//console.log(universe.duration(2, 1e40) / (3600*24*365.25*1e9));
//console.log(universe.duration(5, 10) / (3600*24*365.25*1e9));
//console.log(universe.duration(-0.9, 5) / (3600*24*365.25*1e9));
//console.log(universe.emission_age(1e22) / (3600*24*365.25*1e9));
//console.log(universe.duration(1e21, 1e22) / (3600*24*365.25*1e9));