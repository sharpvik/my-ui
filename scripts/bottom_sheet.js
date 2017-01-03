$(document).ready(function() {
    
    var clicked = false;
    
    $('#tomato_like').on('click', function() {
        if (clicked) {
            clicked = false;
            $(this).attr('class', 'fa fa-star-o');
        } else {
            clicked = true;
            $(this).attr('class', 'fa fa-star');
        }
    });
    
});