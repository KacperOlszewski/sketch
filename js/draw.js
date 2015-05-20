$(document).ready(function() {
	var s = $('.space');
	var d = $('.space div');
	n =	$(s).width() * $(s).height() / Math.pow($(d).width(),2);

	for (var i = 1; i < n; i++) {
		$('.space').append('<div></div>')
	};

  $('.space div').click(function() {
  	$(this).css({background:"#333333"});
  });

  $('.rubber').click(function() {
  	$('.space div').css({background:"#CFCFCF"});
  })

});

 $(document).mousedown(function() {
      $(".space div").bind('mouseover',function(){
          $(this).css({background:"#333333"});
      });
  }).mouseup(function() {
    $(".space div").unbind('mouseover');
  });