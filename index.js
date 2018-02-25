// Code your solution here:


function driversWithRevenueOver(drivers, revenue){
  return drivers.filter((driver)=>(driver.revenue >= revenue))
}

function driverNamesWithRevenueOver(drivers, revenue){
  let driverObjects = driversWithRevenueOver(drivers, revenue);
  return driverObjects.map((driver)=>(driver.name))
}

function exactMatch(drivers, object){
  let objectKey = Object.keys(object)[0]

  return drivers.filter((driver)=>(
    object[objectKey] === driver[objectKey]))
}

// function exactMatch (drivers, matcher) {
//   return drivers.filter(function (driver) {
//     let matches = false;
//
//     for (const key in matcher) {
//       matches = driver[key] === matcher[key];
//     }
//
//     return matches;
//   });

function exactMatchToList(drivers, object){
  let driverObjects = exactMatch(drivers, object);

  return driverObjects.map((driver)=>(driver.name))


}





//
