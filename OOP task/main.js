// ota class
class Car {

    constructor(options){
        this.name = options.name;
        this.country = options.country;
        this.price = options.price;
        this.color = options.color;
    }
}

// bola class
class Sedan extends Car {
    constructor(options){
        super(options);
        this.year = options.year;
    }
}

class Gruzavoy extends Car {
    constructor(options){
        super(options);
        this.weight = options.weight;
    }
}

class Pikap extends Car {
    constructor(options){
        super(options);
        this.length = options.length;
    }
} 

class Hatchback extends Car {
    constructor(options){
        super(options);
        this.petrolConsume = options.petrolConsume;
    }
} 

class Crossover extends Car {
    constructor(options){
        super(options);
        this.hasExtraSeat = options.hasExtraSeat;
    }
} 

// bola classning bolasi
// Gruzavoy ning bola classlari
class Samosval extends Crossover {
    constructor(options){
        super(options);
        this.hasDiscount = options.hasDiscount;
    }
} 

class Yuk extends Crossover {
    constructor(options){
        super(options);
        this.hasExtraTire = options.hasExtraTire;
    }
} 

class Track extends Crossover {
    constructor(options){
        super(options);
        this.hasDiscount = options.discount;
    }
} 

// gruzavoyni bola Samasvaldan chiqqan objectlari
const SamosvalChild1 = new Samosval ({
    name: 'SamosvalChild',
    country: 'Germany',
    price: '$54000',
    color: 'grey',
    weight: '14 tonnas',
    hasDiscount: true
})

const SamosvalChild2 = new Samosval ({
    name: 'SamosvalChild2',
    country: 'Denmark',
    price: '$46000',
    color: 'black',
    weight: '25 tonnas',
    hasDiscount: true
})

const SamosvalChild3 = new Samosval ({
    name: 'SamosvalChild3',
    country: 'USA',
    price: '$82000',
    color: 'grey',
    weight: '34 tonnas',
    hasDiscount: true
})

// gruzavoyni bola Yukdan chiqqan objectlari

const YukChild1 = new Yuk ({
    name: 'YukChild1',
    country: 'USA',
    price: '$23000',
    color: 'grey',
    weight: '8 tonnas',
    hasExtraTire: true
})

const YukChild2 = new Yuk ({
    name: 'YukChild2',
    country: 'Germany',
    price: '$16000',
    color: 'white and black',
    weight: '12 tonnas',
    hasExtraTire: true
})

const YukChild3 = new Yuk ({
    name: 'YukChild3',
    country: 'USA',
    price: '$33000',
    color: 'grey',
    weight: '5 tonnas',
    hasExtraTire: true
})

// gruzavoyni bola Track chiqqan objectlari
const Track1 = new Track ({
    name: 'Track1',
    country: 'USA',
    price: '$11000',
    color: 'grey',
    weight: '4 tonnas',
    hasDiscount: true
})

const Track2 = new Track ({
    name: 'Track2',
    country: 'USA',
    price: '$22000',
    color: 'grey',
    weight: '6 tonnas',
    hasDiscount: true
})

const Track3 = new Track ({
    name: 'Track3',
    country: 'USA',
    price: '$14000',
    color: 'grey',
    weight: '12 tonnas',
    hasDiscount: true
})



// object creation
// Sedan objects
const Lacetti = new Sedan ({
    name: 'Lacetti',
    country: 'Germany',
    price: '$12000',
    color: 'white',
    year: 2010
})

const Nexia = new Sedan ({
    name: 'Nexia',
    country: 'Uzbekistan',
    price: '$8000',
    color: 'blue',
    year: 2010
})

const Maluba = new Sedan ({
    name: 'Maluba',
    country: 'Turkey',
    price: '$14000',
    color: 'white',
    year: 2010
})

// pikap objects
const Perojkavoz = new Pikap ({
    name: 'Perojkavoz',
    country: 'USA',
    price: '$34000',
    color: 'red and black',
    length: '14 meters'
})

const Labo = new Pikap ({
    name: 'Labo',
    country: 'Indea',
    price: '$24000',
    color: 'Selver',
    length: '5 meters'
})

const Mikser = new Pikap ({
    name: 'Mikser',
    country: 'Germany',
    price: '$42000',
    color: 'grey',
    length: '9 meters'
})

// hatchback objects
const Spark = new Hatchback({
    name: 'Spark',
    country: 'Uzbekistan',
    price: '$9500',
    color: 'white',
    petrolConsume: '1L / 14km'
})

const Matiz = new Hatchback({
    name: 'Matiz',
    country: 'Korea',
    price: '$6000',
    color: 'grey',
    petrolConsume: '1L / 12km'
})

const Tiko = new Hatchback({
    name: 'Tiko',
    country: 'Russia',
    price: '$4500',
    color: 'red',
    petrolConsume: '1L / 18km'
})

// crossover objjects
const Captiva = new Crossover({
    name: 'Captiva',
    country: 'Canada',
    price: '$18000',
    color: 'black and white',
    hasExtraSeat: true
})

const Equinox = new Crossover({
    name: 'Equinox',
    country: 'Poland',
    price: '$21000',
    color: 'red and white',
    hasExtraSeat: false
})

const Tracker = new Crossover({
    name: 'Tracker',
    country: 'Korea',
    price: '$14000',
    color: 'black and white',
    hasExtraSeat: true
})

