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

    carColor(){
        return this.color;
    }

    carYear(){
        return `Manufactured year is ${this.carAge}`;
    }

    carModel(){
        return this.model;
    }

    carWeight(){
        return this.weight;
    }
}

let color = 'white';
let carYear = 2008;
let model = 'BMW';
let weight = '800kg';

export {color, carYear, model, weight, Cars}

