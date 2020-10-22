// ========Закрепить меню вверху
window.addEventListener('scroll', menuOnTop);
let menu = document.querySelector(".menu");

function menuOnTop(){
	if(document.documentElement.scrollTop>20){
		menu.style.top = 0;
		menu.style.display = "fixed";
		menu.style.transition = ".3s";// для обычного меню

		
	}else if(document.documentElement.scrollTop<20){
		menu.style.top = "120px";		
	}
	
}

//==========Открытие мобильного меню

let hamb = document.querySelector('.hamburger');
let wmm = document.querySelector('.wrap_mobile_menu');
let mmb = document.querySelector('.mobile_menu_button');
hamb.addEventListener('click', openMobMenu);

function openMobMenu(){
	wmm.classList.toggle('menu_visible');
	mmb.classList.toggle('mobile_menu_button_down');
	wmm.style.transition = ".3s";
}
