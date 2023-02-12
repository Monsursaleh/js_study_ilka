'use strict';

const cars=require('./cars.json');

// console.log(cars);

function getWithLicence(licence){
    for(const car of cars){
        if(car.licence===licence){
            return car;
        }
    }
    return null;
}


// function getWithModel(model){
//     return cars.filter(car=>car.model===model);
// }

function getWithModel(model){
    const carsFound=[];
    for(const car of cars){
        if(car.model===model){
            carsFound.push(car);
        }
    }
    return carsFound;
}

function getAllModels(){
    const models=[];
    for(const car of cars){
        if(car.model && !models.includes(car.model)){
            models.push(car.model);
        }
    }
    return models;
}

function getCars(key,value){
    const found=[];
    for(const car of cars){
        if(car[key]===value){
            found.push(car);
        }
    }
    return found;
}

module.exports = { getWithLicence, getWithModel, getAllModels, getCars }