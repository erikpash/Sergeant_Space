$(document).ready(function(){


	
	$(".chosen-select").chosen({
		no_results_text: "Нет результата",
	});
	
	$('.types a').on('click', function(){
		$(this).toggleClass('active')
	});
	
	  // prefill all hint fields
  $('.hint').each(function(){
    $(this).val($(this).data('hint') || $(this).data('placeholder'));
  });

  // focus/blur hint field
  $('.hint').on('focus', function(){
    var $field = $(this),
      hint = $field.data('hint') || $field.data('placeholder');
    if ($field.val() == hint) {
      $field.addClass('focused').val('');
    }
  }).on('blur', function(){
    var $field = $(this),
      hint = $field.data('hint') || $field.data('placeholder');;
    if (!$field.val()) {
      $field.removeClass('focused').val(hint);
    }
  });
  	
	if ($('.ie, .ie9').length) {
		$('.header-nav a.item').on('mouseenter', function(){
			$('.item-bg', $(this)).animate({'top':'-25px'}, 500);
		}).on('mouseleave', function(e){
			$('.item-bg', $(this)).animate({'top':'0'}, 500);
		}).on('mousedown', function(){
			$('.item-bg', $(this)).animate({'top':'-92px'}, 500);
		});	
	}

  
	$('.coaches a').on('mouseenter', function(){
		$('.cover', $(this)).animate({opacity:0.5}, 500);
		$('.cover-text', $(this)).animate({opacity:1}, 500);
	}).on('mouseleave', function(e){
		$('.cover, .cover-text', $(this)).animate({opacity:0}, 500);
	});	
	
	$('.coaches a').on('mousedown', function(){
		$('.cover', $(this)).animate({opacity:0.3}, 100);
	});	
	
	
	
	$('.big-map').on('mouseenter', function(){
		$('.cover', $(this)).fadeOut();
	}).on('mouseleave', function(e){
		$('.cover', $(this)).fadeIn();
	});		


	$('.anchor-close').on('click', function(){
		var $this = $(this),
		   $section = $this.parent().next('.to-close');
		if ($this.hasClass('closed')) {
		  $this.removeClass('closed');
		  $section.slideDown();
		} else {
		  $this.addClass('closed');
		  $section.slideUp();
		}
		 return false;
	});
		
	$(':checkbox, :radio').each(function(){
		if ($(this).is(':checked')) {
			$(this).closest('label').addClass('on');
		}
	});
  
  $(':checkbox, :radio').on('change', function(event){
    var $field = $(this),
        $label = $field.closest('label');

    if ($field.is(':radio')){
        $field.closest('label').siblings('label').removeClass('on');
    } else {
        $label.toggleClass('on');
    }
    event.preventDefault()
  });
	if ($('.ie').length){
		$(':checkbox, :radio').closest('label').on('click', function(){
		var $label = $(this),
			 $field = $label.find(':input');

		if ($field.is(':radio')){
			$field.closest('label').siblings('label').removeClass('on');
		} else {
			$label.toggleClass('on');
		}
	  });
	}
	
	$('.open-cabinet').on('click', function(){
		$('.enter-cabinet').slideDown();
	});
	$(document).mouseup(function (e) {
		var container = $('.enter-cabinet');
		if (container.has(e.target).length === 0){
			container.slideUp();
		}
	});

		//tabs
	$("a", $(".tabs")).click(function(){
		if ($(this).hasClass("cur")) return false;
		var $i = $(this);
		$i.addClass("cur").siblings("a").removeClass("cur");
		$($i.attr("href")).removeClass('off').siblings(".tabinfo").addClass('off');
		return false;
	});	
	
			//time-tab
	$("a", $(".time-tab")).click(function(){
		if ($(this).hasClass("cur")) return false;
		var $i = $(this);
		$i.addClass("cur").siblings("a").removeClass("cur");
		return false;
	});
	
  
	$('#add-subscr').on('click', function(){
		$('#window').fadeIn();
		$('#win-subscr').fadeIn();
		$('#overlay').fadeIn();
		$('body').addClass('modal-mode');
	});
	
  $('a.win').on('click', function(){
    $($(this).attr('href')).show().siblings('.inner').hide();
    return false;
  });
	
	$('.close').on('click', function(){
		$('#window').fadeOut();
		$('.inner').fadeOut();
		$('#overlay').fadeOut();
		$('body').removeClass('modal-mode');
	});	
	
	$('.sub .back-arrow').on('click', function(){
		$(this).closest('.inner.sub').hide().siblings('.general').show();
	});	
	
	
	$('.tag').on('click', function(){
		$(this).hide();
	});
	
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		padding: 2
	});
	

	  $('.bxslider').bxSlider({
		slideWidth: 36,
		minSlides: 2,
		maxSlides: 10,
		moveSlides: 1,
		slideMargin: 0,
		pager: false
	  });
	  
	  /*datepicker ui*/
		$( "#from" ).datepicker({
		  defaultDate: "+1w",
		  changeMonth: false,
		  showWeek: true,
		  numberOfMonths: 1,
		  dateFormat: "mm/dd/y",
		  onClose: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
		  }
		});
		$( "#to" ).datepicker({
		  defaultDate: "+1w",
		  changeMonth: false,
		  showWeek: true,
		  numberOfMonths: 1,
		  dateFormat: "mm/dd/y",
		  onClose: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		  }
		});
	
	
	$('.subscr-input').on('keyup', function(){
		var value = $(this).val() || "",
		$list = $('.subscrList');
		if (value!=='') {
			$('li:not(:contains(' + value + '))', $list).hide(); 
			$('li:contains(' + value + ')', $list).show();
		} else {
			$('li', $list).show();
		}
	});
	
	$('.plus').on('click', function(){
		$('.site').append('<input type="text" class="input-text ">');
	});	
	$('.plus2').on('click', function(){
		$('.speaker_add').append('<div class="add_speak"><input type="text" class="input-text short"><img class="photo_speaker" style="width:75px;height:75px;" src="./media/images/coach2.jpg"/><a class="download-photo" href="#">Загрузить фотографию </a> <span style="display:none;" class="fr"><a href="#" >Изменить</a><a href="#" style="margin-left:20px;" >Удалить</a></span></div>');
	});	
	
 });