$(document).ready(function() {
    
    $('.calendar_date').on('click', function() {
        $('.calendar_date').removeClass('active_date');
        $(this).addClass('active_date');
    });
    
});