// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    const new_arr = arr.slice(0, 2);
    return new_arr;
}

const returnLastTwoDrivers = function(arr){
    const new_arr = arr.slice(-2);
    return new_arr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];