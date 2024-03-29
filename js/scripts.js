const navigationButton = {
	next: document.querySelector('.slider-navigation-button.next'),
	previous: document.querySelector('.slider-navigation-button.previous')
} //Здесь задаются кнопки переключающие вперёд и назад
let currentNumber = 0;
const slides = document.querySelectorAll('.slider-item'); //Здесь задаются слайды слайдера

let sliderButton = document.querySelector('.slider-button').cloneNode(true); //Здесь задаётся образец навигационных кнопок слайдера
for (let i = 0; i<slides.length-1;i++){
	document.querySelector('.slider-buttons').appendChild(sliderButton);
	sliderButton = document.querySelector('.slider-button').cloneNode(true);
} // Кнопки клонируются нужное количество раз
const sliderButtons = document.querySelectorAll('.slider-button');
	console.log(sliderButtons)
for (let i = 0; i<slides.length;i++){
	sliderButtons[i].addEventListener("click",function(){swipe(i)})
}


function swipe(page){

	Array.from(slides).map(function(el,num){
		if (page==slides.length-1 && num==0){
			el.classList.remove("slider-left","slider-center","slider-fix")
			el.classList.add("slider-right")
		} else if (page==0 && num==slides.length-1) {
			el.classList.remove("slider-right","slider-center","slider-fix")
			el.classList.add("slider-left")
		} else if (num>page){
			el.classList.remove("slider-left","slider-center","slider-fix")
			el.classList.add("slider-right")
		} else if (num == page) {
			el.classList.remove("slider-left","slider-right","slider-fix")
			el.classList.add("slider-center")
		} else {
			el.classList.remove("slider-right","slider-center","slider-fix")
			el.classList.add("slider-left")
		}
		if (num == currentNumber) {
			el.classList.add("slider-fix")
		}
		for(let i = 0;i<slides.length;i++){
				if (i==page) {
				sliderButtons[i].classList.add("slider-button-active")
			} else {
				sliderButtons[i].classList.remove("slider-button-active")
			}
		}
	});
	currentNumber = page
}

swipe(currentNumber)
navigationButton.next.addEventListener("click", function(){swipe(currentNumber==slides.length-1?0:currentNumber+1)})
navigationButton.previous.addEventListener("click", function(){swipe(currentNumber==0?slides.length-1:currentNumber-1)})

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
	if (touch.distance<screen.width*-0.25) {
		swipe(currentNumber==slides.length-1?0:currentNumber+1)
	}
	if (touch.distance>screen.width*0.25){
		swipe(currentNumber==0?slides.length-1:currentNumber-1)
	}
})
