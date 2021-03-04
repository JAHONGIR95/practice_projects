// class Human{
  
//     constructor(birthYear){
//       this.birthYear = birthYear
//     }
    
//     age(){
//         let currentYear = new Date().getFullYear();
//         return currentYear - this.birthYear
//       }

// }

// let birthYear = 1995;

// export {birthYear, Human}

class Cars{
    constructor(color, carAge, model, weight){
        this.color = color;
        this.carAge = carAge;
        this.model = model;
        this.weight = weight;
    }

    colorCar(){
        return this.color;
    }

    carYear(){
        return `Manufactured year is ${this.carAge}`;
    }

    modelCar(){
        return this.model;
    }

    weightCar(){
        return this.weight;
    }
}

let color = 'white';
let carAge = 2008;
let model = 'BMW';
let weight = '800kg';

export {color, carAge, model, weight, Cars}

