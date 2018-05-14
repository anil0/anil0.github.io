function myFunction() {
	    var x = document.getElementById("top-nav");

	    if (x.className === "topnav") 
	    {
	        x.className += " responsive";
	    } 
	    else 
	    {
	        x.className = "topnav";
	    }
	}

$(document).ready(function() 
{
	$('#fullpage').fullpage({
        anchors: ['homePage', 'aboutPage', 'skillsPage', 'projectsPage1', 'projectsPage1', 'contactPage'],
        menu: '#top-nav',
        lockAnchors: false,

        //Scrolling
	    css3: true,
	    scrollingSpeed: 1200,
	    autoScrolling: true,
	    fitToSection: true,
	    fitToSectionDelay: 1000,
	    scrollBar: true,
	    easing: 'easeInOutCubic',
	    easingcss3: 'ease',
	    loopBottom: false,
	    loopTop: false,
	    loopHorizontal: true,
	    continuousVertical: false,
	    scrollOverflow: true,
	    scrollOverflowOptions: {
	      click: true,
	    },
	    touchSensitivity: 15,
	    normalScrollElementTouchThreshold: 5

	});

	
});