$(document).ready(function() {
    
    function weather_widget_timeline() {
        var sectionPos = $('.weather_widget').offset().top,
            sectionHeight = $('.weather_widget').height(),
            scrollPos = $(window).scrollTop(),
            progressPercentage = ((scrollPos - sectionPos) / sectionHeight) * 100,
            rotate = true;
        
        $('.hours').css('left', '-' + progressPercentage + '%');
        
        var status = $('.status').attr('src');
        if (status === 'images/sun.svg') {
            rotate = true; 
        } else {
            rotate = false;
        }
        if (rotate === true) {
            $('.status').css('transform', 'rotate(' + progressPercentage + 'deg)');
        }
        
        if ((progressPercentage > 0) && (progressPercentage < 60)) {
            $('.temperature').html(Math.floor((progressPercentage + 75) / 5) + '°');
        }
    }
    
    $('.location_picker').on('click', function() {
         $('.locations').removeClass('locations_hidden');
    });
    
    $('.location').on('click', function() {
        var newLocation = $(this).html();
        
        if (newLocation.toLowerCase() === "almaty") {
            $('.status').attr('src', 'images/cloudy.svg');
            $('.status').css('transform', 'rotate(0deg)');
        } else if (newLocation.toLowerCase() === "la romana" || newLocation.toLowerCase() === "saint louis") {
            $('.status').attr('src', 'images/sun.svg');
        } 
        
        $('.city').html(newLocation);
        $('.locations').addClass('locations_hidden');
    });
    
    
    // Methods 
    $(window).scroll(function() {
        weather_widget_timeline();
    });
    
    $(window).resize(function() {
        weather_widget_timeline();
    });
    
});
    