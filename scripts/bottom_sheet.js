$(document).ready(function() {
    
    var clicked = false;
    
    $('#tomato_like').on('click', function() {
        if (clicked) {
            clicked = false;
            $('#tomato_icon').attr('class', 'fa fa-star-o');
        } else {
            clicked = true;
            $('#tomato_icon').attr('class', 'fa fa-star');
        }
    });
    
});