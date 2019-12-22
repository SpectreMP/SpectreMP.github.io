const navigationButton = {
	next: document.querySelector('.slider-navigation-button.next'),
	previous: document.querySelector('.slider-navigation-button.previous.previous')
}

function swipeNext(){
	let slides = {
		rightCenter: document.querySelector('.slider-right'),
		centerLeft: document.querySelector('.slider-center'),
		leftRight: document.querySelector('.slider-left'),
	}
	slides.centerLeft.classList.add("slider-left","slider-fix")
	slides.centerLeft.classList.remove("slider-center")
	slides.leftRight.classList.add("slider-right")
	slides.leftRight.classList.remove("slider-left","slider-fix")
	slides.rightCenter.classList.add("slider-center")
	slides.rightCenter.classList.remove("slider-right")
}
function swipePrevious(){
	let slides = {
		centerRight: document.querySelector('.slider-center'),
		leftCenter: document.querySelector('.slider-left'),
		rightLeft: document.querySelector('.slider-right')
	}
	slides.centerRight.classList.add("slider-right","slider-fix")
	slides.centerRight.classList.remove("slider-center")
	slides.leftCenter.classList.add("slider-center")
	slides.leftCenter.classList.remove("slider-left")
	slides.rightLeft.classList.add("slider-left")
	slides.rightLeft.classList.remove("slider-right","slider-fix")
}
navigationButton.next.onclick = swipeNext
navigationButton.previous.onclick = swipePrevious

const sliderScreen = document.querySelector('.slider');
let touch = {
	startX:0,
	finalX:0,
	distance:0,
}
sliderScreen.addEventListener("touchstart", function(evt){
	touch.startX = evt.changedTouches[0].screenX
})
sliderScreen.addEventListener("touchend", function(evt){
	touch.finalX = evt.changedTouches[0].screenX
	touch.distance = touch.finalX - touch.startX
	if (touch.distance<screen.width*-0.15) {
		swipeNext()
	}
	if (touch.distance>screen.width*0.15){
		swipePrevious()
	}
})
