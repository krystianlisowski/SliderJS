    const slides = [
        'https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/04/24/08/57/street-5085971_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/04/18/09/39/poppy-5058494_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/02/11/12/07/portofino-4839356_960_720.jpg'
    ];

    class Slider {
        constructor(slides) {

            this.slides = slides;
            this.index = 0;

            this.image = document.querySelector('.image');
            this.slideNumber = document.querySelector('.slider-counter');
            this.next = document.getElementById('next');
            this.previous = document.getElementById('previous');

            this.previous.addEventListener('click', this.previousSlide);
            this.next.addEventListener('click', this.nextSlide);
            window.addEventListener('keydown', this.keyboardControl);
            this.slide();
        }
    
        previousSlide = () => {
            this.index--;          
            this.slide();
        }
    
        nextSlide = () => {
            this.index++;
            this.slide();
        }
    
        slide() {
            if(this.index === 0) {
                this.previous.disabled = true;
            } else if (this.index === this.slides.length - 1) {
                this.next.disabled = true;
            } else {
                this.next.disabled = false;
                this.previous.disabled = false;
            }
            this.image.src = this.slides[this.index];
            this.slideNumber.textContent = `${this.index + 1} / ${this.slides.length}`;
        }

        keyboardControl = (event) => {
            if(event.keyCode === 39 && this.index < this.slides.length - 1){
                this.nextSlide();
            }
            if(event.keyCode === 37 && this.index > 0) {
                this.previousSlide();
            }
        }
        
    }

    const slider = new Slider(slides);