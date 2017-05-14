import '../imports/login/login.js';
import '../imports/actor/actor.js';
import '../imports/studio/studio.js';
import '../imports/netflix/broadcaster.js';

Router.route('/', function(){
this.render('login');
});

Router.route('/actor', function(){
   this.render('actor');
});

Router.route('/studio', function(){
   this.render('studio');
});

Router.route('/broadcaster', function(){
   this.render('broadcast');
});


/*Doucment resize Function*/
$(window).resize(function () {
  fixedFooter();
})
/*Docuemnt load function*/
$(window).load(function () {
  fixedFooter()
  $('.loader').fadeOut();
})
/*Ready Funtion*/
$(function () {
  fixedFooter()
  /*Back to top Function start*/
  $('body').append('<div class="scrollTop"><a href="javascript:void(0)"></a></div>');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
  $(document).on('click', '.scrollTop a', function () {
    $('body,html').animate({scrollTop: 0}, 800);
  });
  /*Back to top Function End*/
   $(document).on('click', '.select-contact h3', function () {
    var sudDopStatus=$('.select-contact h3').next('.contact-dropdown').css('display');
	if(sudDopStatus == 'none')
	{
		$('.select-contact h3').next('.contact-dropdown').slideDown();
	}
	else
	{
		$('.select-contact h3').next('.contact-dropdown').slideUp();
	}
  });
  
  $(document).on('click', '.contact-dropdown li', function () {
    var sudDophtml=$(this).children('a').html();
	$('.select-contact h3').html(sudDophtml);
	$('.contact-dropdown li').parents('.contact-dropdown').slideUp();
	$('.show-contract').show();
  });
  $('#upload-statement').change(function() {		
	var filenames = '';
	var filelenght='';
		for (var i = 0; i < this.files.length; i++) {
			filenames += this.files[i].name;
		filelenght = this.files.length
	 }
		$(".upload-file-path").html(filenames);
});


  $(document).on('click','.noti-info-number a', function () {
	  var nitStatus=$('.notification-block').css('display');
	  if(nitStatus=='none')
	  {
		$('.notification-block').fadeIn();
		$('.show-contract').show();
	  }
	});
	$(document).on('click','.hideNotification', function () {
	  var nitStatus=$('.notification-block').css('display');
	  if(nitStatus=='block')
	  {
		$('.notification-block').fadeOut();
		$('.show-contract').hide();
		$('.contact-dropdown ul').append('<li><a href="#" target="content">Dynamic Studio Name</a></li>')
	  }
	});
	
	$(document).click(function(e) {
        if (!$(e.target).is('.view-contracts, .view-contracts *')) {
            $(".contact-dropdown").slideUp();
        }
    });
	
});


function fixedFooter()
{
  $('body').css('min-height', $(window).height());
}


