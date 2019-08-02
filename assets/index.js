$(function() {

    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
    $fluidEl = $("figure");

	$allVideos.each(function() {

	  $(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');

	});

	$(window).resize(function() {

	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {

	    var $el = $(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));

	  });

	  //Handle the foreground div
	  var _h = $(window).height();
	  var _w = $(window).width();

	  if (_h > .75 * _w) {
		_h = .75 * _w;
	  }

	  $('#foreground').height(_h);
	  $('#foreground').width(_w);

	  //console.log($('#square').width($(window).width()));

	}).resize();

});