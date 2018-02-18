// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, object){
  key = Object.keys(object)[0];
  value = object[key]
  return drivers.filter(driver => driver[key] === value);
}

function exactMatchToList(drivers, object){
  const matchingDrivers = exactMatch(drivers, object);
  return matchingDrivers.map(driver => driver.name);
}
