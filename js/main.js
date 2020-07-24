/* JS Document */
function initMap() {
	const myLatLng = { lat: -10.7001433, lng: -37.4339916 };

	var map = new google.maps.Map(document.getElementById("google_map"), {
		center: myLatLng,
		zoom: 18,
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		animation: google.maps.Animation.DROP,
		title: "By Brasil"
	});
	const contentString =
		'<h1 class="card-title">BY BRASIL</h1>';
	const infowindow = new google.maps.InfoWindow({
		content: contentString
	});
	infowindow.open(map, marker);
}

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menuActive = false;
	var menu = $('.menu');
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();


	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	activeMn();
	initHomeSlider();
	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/*

	4.1 Active Item Menu

	 */
	function activeMn()
	{
		$('.main_nav a').click(function () {
			//removing the previous selected menu state
			$('.main_nav').find('li.active').removeClass('active');
			//adding the state for this parent menu
			$(this).parents("li").addClass('active');
		});
	}
	/*

	5. Init Home Slider

	*/

	function initHomeSlider()
	{
		$('.carousel').carousel({
			interval: 3000
		});
	}
});