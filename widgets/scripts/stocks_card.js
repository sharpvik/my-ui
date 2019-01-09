$(document).ready(function() {
    
    $('.company_picker').on('click', function() {
        $('.companies').removeClass('companies_hidden');
    });
    
    $('.company').on('click', function() {
        $('.companies').addClass('companies_hidden');
        
        var theCompany = $(this).html();
        if (theCompany === "Google Inc") {
            $('.cost').html('520.20');
            $('.sub').html('NASDAQ: GOOG');
            $('.rise').html('<i class="fa fa-long-arrow-up" aria-hidden="true"></i> 2.29 (2.05%)');
        } else if (theCompany === "Apple Inc") {
            $('.cost').html('170.00');
            $('.sub').html('NASDAQ: APPL');
            $('.rise').html('<i class="fa fa-long-arrow-up" aria-hidden="true"></i> 1.53 (2.6%)');
        } else {
            $('.cost').html('999.99');
            $('.sub').html('NASDAQ: MILL');
            $('.rise').html('<i class="fa fa-long-arrow-up" aria-hidden="true"></i> 9.99 (9.99%)');
        }
        
        $('#company_name').html(theCompany);
    });
    
});