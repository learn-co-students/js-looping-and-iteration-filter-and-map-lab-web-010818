function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter (function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  let selectDrivers = driversWithRevenueOver (drivers, revenue)
  return selectDrivers.map (function (driver) {
    return driver.name;
  });
}

function exactMatch (drivers, obj) {
  return drivers.filter(function (driver) {
    for (const key in obj) {
      return driver[key] === obj[key]
    }
  });
}

function exactMatchToList (drivers, obj) {
  let selectDrivers = exactMatch (drivers, obj);
  return selectDrivers.map (function (driver) {
    return driver.name;
  });
}
