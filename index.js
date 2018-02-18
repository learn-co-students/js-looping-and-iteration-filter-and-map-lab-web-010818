function driversWithRevenueOver(drivers, amount) {
  return drivers.filter((e) => { return e.revenue > amount; });
}

function driverNamesWithRevenueOver(drivers, amount) {
  const filteredDrivers = driversWithRevenueOver(drivers, amount);
  return filteredDrivers.map((e) => { return e.name; });
}

function exactMatch(drivers, obj) {
  let matchingKey = null;
  for (const key in obj) { matchingKey = key };
  return drivers.filter((e) => { return e[matchingKey] === obj[matchingKey]; });
}

function exactMatchToList(drivers, obj) {
  const filteredDrivers = exactMatch(drivers, obj);
  return filteredDrivers.map((e) => { return e.name; } );
}
