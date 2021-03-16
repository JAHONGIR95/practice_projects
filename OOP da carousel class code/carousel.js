class Carousel {
    constructor(options){
        this.carousel = document.querySelector(options.parentSelector);
        this.carouselItems = document.querySelectorAll(`${options.parentSelector}-item`);
        this.time = options.time;
        
    }
}