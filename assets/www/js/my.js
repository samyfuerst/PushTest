$(document).on("pageinit", function() {

$("#add").click(function() {
					console.log('harter');
					$.mobile.changePage('#page2',{transition: 'slide'});
				});
				
});