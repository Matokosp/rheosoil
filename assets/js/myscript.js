// Menu Slide

	var menuHideShow = $('.nav-menu-res').children(".menu-hide").hasClass('show');

	function desplazar (){
		$('.menu').toggleClass('menu-show');
    $('.hamburger_div').toggleClass('hamburger_div-slide');
		$('#menuIconFirst').toggleClass('menuicon_first');
		$('#menuIconSecond').toggleClass('menuicon_second');
		$('#menuIconThird').toggleClass('menuicon_third');
		$('.menuicon').toggleClass('menuicon-black');
	}
	$('#hamburger').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.menu').hasClass('menu-show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu menu-show') {
			$('.menu').removeClass('menu-show');
			$('.hamburger_div').removeClass('hamburger_div-slide');
			$('#menuIconFirst').removeClass('menuicon_first');
			$('#menuIconSecond').removeClass('menuicon_second');
			$('#menuIconThird').removeClass('menuicon_third');
			$('.menuicon').removeClass('menuicon-black');
			// e.stopPropagation();
		}
		console.log(e.target)
	})


	// STAFF COLOR PHOTO

	var md = window.matchMedia( "(min-width: 1000px)" );

		if (md.matches) {
			$('.staff_item_photo').on('mouseenter', function() {
				$(this).addClass('staff_item_photo-fade');
			})
			$('.staff_item_photo').on('mouseleave', function() {
				$(this).removeClass('staff_item_photo-fade');
			})
		}


// PRUEBAS MENU

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("pruebasMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset + 100 >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// CHANGE FONT WHEIGHT

		var preparacion = $('#preparacion').offset();
		var fisica = $('#fisica').offset();
		var reologica = $('#reologica').offset();
		var depositacion = $('#depositacion').offset();
		var sedimentacion = $('#sedimentacion').offset();
		var contraccion = $('#contraccion').offset();

		window.addEventListener('scroll', function(){
			if ($(window).scrollTop() + 100 >= preparacion.top ) {
				$('#pruebasMenu').children('li:nth-child(1)').addClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(1)').removeClass('pruebas_menu_link-active');
			}

			if ($(window).scrollTop() + 50 >= fisica.top ) {
				$('#pruebasMenu').children('li:nth-child(1)').removeClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(2)').addClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(3)').removeClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(2)').removeClass('pruebas_menu_link-active');
			}

			if ($(window).scrollTop() + 50 >= reologica.top ) {
				$('#pruebasMenu').children('li:nth-child(2)').removeClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(3)').addClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(4)').removeClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(3)').removeClass('pruebas_menu_link-active');
			}

			if ($(window).scrollTop() + 50 >= depositacion.top ) {
				$('#pruebasMenu').children('li:nth-child(3)').removeClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(4)').addClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(5)').removeClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(4)').removeClass('pruebas_menu_link-active');
			}

			if ($(window).scrollTop() + 50 >= sedimentacion.top ) {
				$('#pruebasMenu').children('li:nth-child(4)').removeClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(5)').addClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(6)').removeClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(5)').removeClass('pruebas_menu_link-active');
			}

			if ($(window).scrollTop() + 50 >= contraccion.top ) {
				$('#pruebasMenu').children('li:nth-child(5)').removeClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(6)').addClass('pruebas_menu_link-active');
				$('#pruebasMenu').children('li:nth-child(7)').removeClass('pruebas_menu_link-active');
			} else {
				$('#pruebasMenu').children('li:nth-child(6)').removeClass('pruebas_menu_link-active');
			}


		})




// SCROLL WINDOW TO ID

	// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
