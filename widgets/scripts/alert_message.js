$(document).ready(function() {
    
    $('.activate_alert').on('click', function() {
        $('.alert').slideDown('medium');
        $('#time_to_explode').html('3');
        
        var timeToExlode = 2;
        
        var countDown = setInterval(function() { 
            $('#time_to_explode').html(timeToExlode);
            timeToExlode--;
            if (timeToExlode < 0) { 
                clearInterval(countDown) 
                $('.alert').slideUp('medium');
            }
        }, 1000);
        
    });
    
});