// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}


function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map( driver => driver.name);
}

function exactMatch(drivers, attribute) {
  return drivers.filter(function(driver){
    let matches  = false
    for (const key in attribute) {
      matches = driver[key] === attribute[key];
    }
    return matches
  })
}

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map( driver => driver.name);
}
