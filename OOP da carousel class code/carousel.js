class Carousel {
    constructor(options){
        this.carousel = document.querySelector(options.parentSelector);
        this.carouselItems = document.querySelectorAll(`${options.parentSelector}-item`);
        this.time = options.time;
        this.width = options.size.width + 'px';
        this.height = options.size.height + 'px';
        this.activeElement = options.activeElement;

        this.carouselItems.forEach((item, index) => {
            item.style.width = this.width;
        })
    }
}