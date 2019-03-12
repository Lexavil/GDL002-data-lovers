 
//I save my news data as an array in my variable
const news = window.STEAM.appnews.newsitems;
//I declare my event listeners for my HTML elements
document.getElementById("organizeByAuthor").addEventListener("click", () => {
  let organizedByTitleArray = window.dataLovers.displayNewsByTitle(news);
  window.dataLovers.printNews(organizedByTitleArray);
});
document.getElementById("organizeByDate").addEventListener("click", () => {
  let organizedByDateArray = window.dataLovers.displayNewsByDate(news);
  window.dataLovers.printNews(organizedByDateArray);
});
document.getElementById("filterByAuthor").addEventListener("click", () => {
  let filteredArray = window.dataLovers.filterNewsByAuthor(news);
  window.dataLovers.printNews(filteredArray);
});

//*********************************************************************************************//

menu();

function menu(){
  document.getElementById("root").innerHTML = `
  ${news.map(window.dataLovers.newsTemplate).join("")}`;
}
//******************************* */funcion boton ir arriba/*********************************//
$(document).ready(function(){
 
	$(".ir-arriba").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$(".ir-arriba").slideDown(300);
		} else {
			$(".ir-arriba").slideUp(300);
		}
	});
 
});

//***************menu */

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 