"use strict";
const cars = require("./cars.json");
console.log(cars);
cars.forEach((car) => console.log(car));

function getWithLicence(licence) {
  for (const car of cars) {
    if (
      car.licence ===
      // car.['license']
      licence
    ) {
      return car;
    }
  }
  return null;
}

function getWithmdoel1(getAllModels) {
  return cars.filter((car) => (car.model = model));
}
function getWithModel(model) {
  let foundCar = [];
  for (const car of cars) {
    if (car.model === model) {
      foundCar.push(car);
    }
  }
  return foundCar;
}

function getAllModels() {
  let models = [];
  for (const car of cars) {
    if (car.model && !models.includes(car.model)) {
      models.push(car.model);
      // }
    }
    return models;
  }
}

function getCar(key, value) {
  let filtered_car = [];
  for (const car of cars) {
    for (const [k, v] of Object.entries(car)) {
      if (k === key && v === value) {
        filtered_car.push(car);
      }
    }
  }
  return filtered_car;
}

// exporting module

module.exports = { getWithLicence, getWithModel, getAllModels, getCar };
