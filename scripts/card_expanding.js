$(document).ready(function() {
    
    $('#card_expand').on('click', function() {
        $(this).toggleClass('turned');
        $('.hidden').slideToggle('medium');
    });
    
});