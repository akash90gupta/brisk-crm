	$(function() {
		//Picking the current date on the calendar on the left pane
    startTime();
		$( "#datepicker" ).datepicker({ firstDay: 1});

    //Bootstrap Popover
    $('[data-toggle="popover"]').popover();  

		// Carousel Auto-Cycle
		$('.carousel').carousel({
		interval: 3000
		})
	});

  //Dynamically creating div and appointment slot on the calendar. 
  $('.creating-appointment').click(function(){
      var divSubmit = $(document.createElement('div'));
      //$(divSubmit).append('<input type=button class="bt" onclick="GetTextValue()"' + 'id=btSubmit value=Submit />');
    var appointmentSlot = $('.employee1 ul li').append(divSubmit);
    divSubmit.addClass('pending');
  });

  //Dynamically creating the person/employee tile
  $('.new-person-tile').click(function(){
    //e.preventDefault();  
    var persontile = document.createElement('div');
    persontile.addClass('person-tile');
    //var persons = $('.person-tile').append(new_tile);
    //new_tile.addClass('person-tile');
  });

  function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('clock').innerHTML=h+":"+m+":"+s;
    t=setTimeout('startTime()', 500);
  }

  function checkTime(i){
  if (i<10){
    i="0" + i;
  }
  return i;
  }

	//Tab and Sub Tab functionality
	$("ul.nav-tabs a").click(function (e) {
		e.preventDefault();  
		$(this).tab('show');
	});

	 //--- Select the first tab and div by default
  $('#vertical_tab_nav > ul > li > a').eq(0).addClass("selected");
  $('#vertical_tab_nav > div > article').eq(0).css('display', 'block');

  //--- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function
  $('#vertical_tab_nav > ul').click(function(e) {
    if ($(e.target).is("a")) {
      /*Handle Tab Nav*/
      $('#vertical_tab_nav > ul > li > a').removeClass("selected");
      $(e.target).addClass("selected");

      /*Handles Tab Content*/
      var clicked_index = $("a", this).index(e.target);
      $('#vertical_tab_nav > div > article').css('display', 'none');
      $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();
    }

    $(this).blur();
    return false;

  });
