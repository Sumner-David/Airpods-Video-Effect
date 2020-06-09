

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//SCENES
const scene = new ScrollMagic.Scene({
    //Length of scroll. usually 1000px: 1sec of video
    duration: 15000,
    
    triggerElement: intro,
    triggerHook: 0
})
.addIndicators()
//Pins intro to screen until trigger and hook hit
.setPin(intro)
.addTo(controller);

//VIDEO ANIMATION

//The delay movement when scroll stops. 1 is instant
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on('update', function (event) {

    scrollpos = event.scrollPos / 1000;
    
});

setInterval (() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos,delay);

    video.currentTime = delay;
},100);