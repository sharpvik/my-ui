$(document).ready(function() {
    
    $('#card_expand').on('click', function() {
        var $this = $(this);
        $this.toggleClass('turned');
        $this.toggleClass('not_turned');
        $('.hidden').slideToggle('medium');
    });
    
});