/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

//sekect all imgs
var allImgs = $('img');

// select all sections
var allSections = $('section');

function onReady() {


	$('nav').slideUp();
	$('nav').slideDown();
	allSections.hide();

}

$('#exit-button').dblclick(function() {
	//show the modal to the world
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {

	window.location.href = 'http://courses.washington.edu/'
});


allImgs.hover(function() {

	//console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');

});


allNavLinks.click(function() {
	console.log($(this).attr('href'));
	// since this.attr href returns the id of the object we want to act on, we can just use that instead #sec1 

	// give me this back as a jquery object, do jQuery stuff
	console.log(this);
	// give me this back as a plain element. you can't use stuff like addClass with this

	// acts on the jQuery object containing this element
 	allSections.hide();
 	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
 	// the return value of this method is the original object we started with 
});

$(onReady);