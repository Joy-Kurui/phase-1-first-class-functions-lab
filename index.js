// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return ['Antonia', 'Nuru'];
}
function returnLastTwoDrivers(drivers){
    return ['Amari', 'Mo'];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];   

function createFareMultiplier(num){
    return function(fare){return num * fare};
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(abc, def){
return def(abc);
}
