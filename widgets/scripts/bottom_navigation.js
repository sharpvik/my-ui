$(document).ready(function() {

    // Highlight the clicked navigator
    $('.bottom_navigator').on('click', function() {
        $('.bottom_navigator').removeClass('active_navigator');
        $(this).addClass('active_navigator');

        // Define the content of the card on click
        var clickedNavigator = $(this).attr('id');

        if (clickedNavigator === 'recents') {
            $('#news_card_image').css('background-image', 'url(images/ny.jpg)');
            $('#news_card_title').html('New York');
            $('#news_card_section').html('Travel');
            $('#news_card_article').html('City than most any other place on the planet. In a fascinating New York Times Op-ed titled “My Endless New York” by acclaimed British historian Tony Judt, who came to New York University by way of Oxford, New York is, “a city more at home in the world than in its home country.');
            $('#news_card_link').attr('href', 'https://en.wikipedia.org/wiki/New_York');
        } else if (clickedNavigator === 'favorites') {
            $('#news_card_image').css('background-image', 'url(images/tokyo.jpg)');
            $('#news_card_title').html('Tokyo');
            $('#news_card_section').html('Business');
            $('#news_card_article').html('I walked out of Tokyo Station, the big commuter hub in the city’s Chiyoda district, and turned to look up at its gorgeous brick facade. I was lost. I couldn’t find the Tokyo Station Hotel — a well-reviewed luxury property that was renovated in 2012. My mistake, it turned out, was leaving the train station at all.');
            $('#news_card_link').attr('href', 'https://en.wikipedia.org/wiki/Tokyo');
        } else {
            $('#news_card_image').css('background-image', 'url(images/budapest.jpg)');
            $('#news_card_title').html('Budapest');
            $('#news_card_section').html('Leisure');
            $('#news_card_article').html("From August 30 to September 4, Budapest will become the center of the short film world as the 12th annual Budapest Short Film Festival (BuSho) unspools its 74 masterpieces selected from 1,038 entries. The festival is a showcase of developing young filmmakers from all over the world competing in three categories: fiction, animation and experimental.");
            $('#news_card_link').attr('href', 'https://en.wikipedia.org/wiki/Budapest');
        }
    });

});