const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// help with inference
const theCar = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2020-10-10'];
importantDates.push(new Date());