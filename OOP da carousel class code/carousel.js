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
            item.style.height = this.height;
            item.style.objectFit = 'cover';


        })
        this.carouselChanger();
    }

    carouselFader(activeElementIndex){
        this.carouselItems.forEach((item, index) => {
            if(index == activeElementIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    }

    carouselChanger(){
        let activeElementIndex = 0;

        setInterval(() => {
            if(activeElementIndex < this.carouselItems.length - 1){
                activeElementIndex++;

            } else {
                activeElementIndex = 0;
            }
        }, this.time);
    }
}