function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function(user) {return user.revenue > rev})
}

function driverNamesWithRevenueOver(drivers, rev) {
  const newArr = []
  const filteredDrivers = driversWithRevenueOver(drivers, rev);
  filteredDrivers.map(function(user) {newArr.push(user.name)})
  return newArr;
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(user) {
    for(const key in obj) {
      if (user[key] === obj[key]) {
        return user;
      }
    }
  });
}

function exactMatchToList(drivers, obj) {
  newArr = [];
  exactMatch(drivers, obj).map(function(user) { newArr.push(user.name) });
  return newArr;
}
