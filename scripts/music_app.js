$(document).ready(function() {
    
    function music_app_progress_bar() {
        var sectionPos = $('.music_app').offset().top,
            sectionHeight = $('.music_app').height(),
            scrollPos = $(window).scrollTop(),
            progressPercentage = ((scrollPos - sectionPos) / sectionHeight) * 100;
        
        $('.progress_bar').css('width', progressPercentage + '%');
    }
    
    
    // Methods 
    $(window).scroll(function() {
        music_app_progress_bar();
    });
    
    $(window).resize(function() {
        music_app_progress_bar();
    });
    
});
    