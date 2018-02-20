// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name})
}

function exactMatch(drivers, attribute) {
  const attrKey = Object.keys(attribute)[0]
  return drivers.filter(function (driver) {
    return driver[attrKey] === attribute[attrKey];
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(function (driver) {
    return driver.name
  })
}
