if(window.matchMedia("(max-width:700px)").matches){const slider=document.querySelector('.reviews__card-people');const btnNext=document.querySelector('.card-slider-button');const sliderItems=Array.from(slider.children);sliderItems.forEach(function(slide,index){if(index!==0){slide.classList.add('hidden')}
slide.dataset.index=index;sliderItems[0].setAttribute('data-active','')})
btnNext.onclick=function(){const currensSlide=slider.querySelector('[data-active]');const currenSlideIndex=+currensSlide.dataset.index;currensSlide.classList.add('hidden');currensSlide.removeAttribute('data-active');let nextSlideIndex=currenSlideIndex+1===sliderItems.length?0:currenSlideIndex+1;const nextSlide=slider.querySelector(`[data-index="${nextSlideIndex}"]`)
nextSlide.classList.remove("hidden");nextSlide.setAttribute('data-active',"")}}