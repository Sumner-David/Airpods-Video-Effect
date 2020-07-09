

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

//END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');


//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//SCENES
let scene = new ScrollMagic.Scene({
    //Length of scroll. usually 1000px: 1sec of video current ratio is 1px to 1miliSecond
    duration: 9000,

    //Which do you want it to trigger
    triggerElement: intro,

    //Triggerhook: where you want the scene to trigger. 0 is top, 1 is bottom.
    triggerHook: 0
})
//Used for debugging so we can see the start
// .addIndicators()
//Pins intro to screen until trigger and hook hit
.setPin(intro)
.addTo(controller);



//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});


let scene2 = new ScrollMagic.Scene({
    duration:3000,
    triggerElement: intro,
    triggerHook : 0
})
.setTween(textAnim)
.addTo(controller)





//***VIDEO ANIMATION***//
//accelAmount is the delay movement when scroll stops. 1 is instant
let accelamount = 0.2;
let scrollpos = 0;
let delay = 0;

scene.on('update', function (event) {
    // change our miliseconds to normal seconds by dividing by 1000
    scrollpos = event.scrollPos / 1000
    
});

// Change the video's current play position every time we run this. So higher interval = lower frame rate.....lower interval also = heavier on PC
setInterval (() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos,delay);
    video.currentTime = delay;
    console.log('vid is at ' + video.currentTime + ' secs')
},33.3);

