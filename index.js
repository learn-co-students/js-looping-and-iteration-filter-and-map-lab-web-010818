// Code your solution here:
function driversWithRevenueOver(array, value){
  return array.filter(function(person){ return person.revenue > value});
}

function driverNamesWithRevenueOver(array, value){
  let selected = array.filter(function(person){ return person.revenue > value});
  return selected.map(function(person){ return person.name});
}

function exactMatch(array, object){
  return array.filter(function(person){ return object[Object.keys(object)[0]] === person[Object.keys(object)[0]]});
}

function exactMatchToList(array, object){
  let selected = array.filter(function(person){ return object[Object.keys(object)[0]] === person[Object.keys(object)[0]]});
  return selected.map(function(person){ return person.name})
}
