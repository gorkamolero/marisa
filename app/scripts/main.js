console.log('\'Allo \'Allo!');

var	win = $(window),
	windowWidth = win.width(),
	windowHeight = win.height(),
	body = $(document.body),
	headerWrapper = $('#header .wrapper'),
	contactoWrapper = $('#contacto .wrapper'),
	nav = $('#nav ul'),
	navWrapper = $('#nav'),
	headerToggle = $('#header-toggle'),
	stickyNav = $('#sticky-nav'),
	navOpen = false,
	navToggle = $('#nav-toggle'),
	navClose = $('.close'),
	navLink = $('#nav li a');

//$(headerWrapper).css('margin-top', 0 - headerWrapper.height());
//$(contactoWrapper).css('margin-top', (0 - contactoWrapper.height())/2);
//$(nav).css('margin-top', 0 - nav.height());

// Initialize Sticky Navigation

nav.find('.wrapper').height(windowHeight);

//Sticky Nav magical appearance fur Desktop
$('#intro').waypoint(function(direction) {
	if ( windowWidth > 1025 ) {
		if ( direction == 'down' ) {
			if ( navOpen == true ) {	nav.slideUp('fast'); }
			stickyNav.slideDown('fast');
			navWrapper.removeClass('static').addClass('fixy');
		}

		else {
			stickyNav.slideUp('fast');
			navWrapper.addClass('static').removeClass('fixy');

			if ( navOpen == true ) {
				nav.slideUp('fast');
				navOpen = false;
			}
		}
	}
});

//Desktop Toggle

navToggle.click(function(e){
	e.preventDefault();
	body.toggleClass('noscroll');
	stickyNav.toggleClass('open');
	navWrapper.toggleClass('open');

	if (navOpen == false) {
		nav.slideDown('fast');
		navOpen = true;
	}
	else {
		nav.slideUp('fast');
		navOpen = false;
	}
});

// Initialize Mobile Navigation
headerToggle.click(function(e){
	e.preventDefault();
	body.toggleClass('noscroll');
	navWrapper.toggleClass('open');
	if (navOpen == false ) {
		nav.slideDown('fast');
		navOpen = true;
	}
	else {
		nav.slideUp('slow');
		navOpen = false;
	}
});


//Close BTNs
navClose.click(function(e){
	e.preventDefault();
	nav.slideUp('slow');
	navWrapper.removeClass('open');
	body.removeClass('noscroll');
	navOpen = false;
});


// Clicking...
/*
navLink.click(function(e){
	var link = $(this);

	e.preventDefault();	
	body.removeClass('noscroll');
	stickyNav.removeClass('open');
	navWrapper.removeClass('open');
	navOpen = false;

	nav.slideUp('fast', function() {
		if ( !link.hasClass('external') ) {
			$.scrollTo(link.attr('href'), 'slow');
		}
	});
	
});
*/
//	Ajaxy stuff

$('.ajax').magnificPopup({
  type: 'ajax',
  alignTop: true,
  overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
});

//	Bloggy stuff


//var figure = $('.post').find('figure');
//figure.anystretch({speed: 150});




// Parallaxy stuff

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


//Da Func

(function(win, doc){
	var b=document.getElementById("circle-1"),
		a=document.getElementById("circle-2"),
		ticking = false,
  		lastScrollY = 0,
  		win = window;

  	function onScroll (evt) {
		var f = win.innerHeight + win.scrollY > e && win.scrollY < c;
			visiblePercent = (win.scrollY+win.innerHeight-e)/b.clientHeight;

		if(f){
		    if(!ticking) {
		      ticking = true;
		      requestAnimFrame(updateElements);
		      lastScrollY = win.scrollY;
		    }
		}
	}

	function onResize () {		updateElements(win.scrollY);	}

	function updateElements() {
			b.style.left=(visiblePercent>1)?0:-b.clientWidth*(1-visiblePercent)+"px";
			a.style.right=(visiblePercent>1)?0:-a.clientWidth*(1-visiblePercent)+"px";
	    	ticking = false;
	}

	function d(f){
		var g=curTop=0;
		if(f.offsetParent){
			do{g+=f.offsetLeft;curTop+=f.offsetTop}
			while(f=f.offsetParent)
		}
		return[g,curTop]
	}

	if(win.addEventListener!=undefined){
		var e=d(b)[1],
			c=d(b)[1]+b.clientHeight;
		
  		win.addEventListener('scroll', onScroll, false);
  		win.addEventListener('resize', onResize, false);
	}
})(window, document);


// Sharing function

(function(doc, script) {
  var js, 
      fjs = doc.getElementsByTagName(script)[0],
      frag = doc.createDocumentFragment(),
      add = function(url, id) {
          if (doc.getElementById(id)) {return;}
          js = doc.createElement(script);
          js.src = url;
          id && (js.id = id);
          frag.appendChild( js );
      };
      
    // Google+ button
    add('http://apis.google.com/js/plusone.js');
    // Facebook SDK
    add('//connect.facebook.net/en_US/all.js#xfbml=1&appId=200103733347528', 'facebook-jssdk');
    // Twitter SDK
    add('//platform.twitter.com/widgets.js');

    fjs.parentNode.insertBefore(frag, fjs);
}(document, 'script'));
