$(document).ready(function() {
    
    var clicked = false;
    
    $("#album_tile_star").on('click', function() {
        
        if (clicked === false) {
            $(this).attr('class', 'fa fa-star');
            clicked = true;
        } else {
            $(this).attr('class', 'fa fa-star-o');
            clicked = false;
        }
        
    });
    
});