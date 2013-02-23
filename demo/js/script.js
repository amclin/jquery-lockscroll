/**
 * Example of calling the plugin
 */

//Apply locksroll function to header menu
$(document).ready(function() {
	$('nav').lockScroll({
		'triggerElement' : $('section.user-comment:first'), //Use the first comment to trigger the scrolling
	});
});