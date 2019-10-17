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
