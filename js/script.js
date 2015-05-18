$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: true,
        paginationSpeed: 400,
        singleItem: true,
        lazyLoad: true,
        mouseDrag: true,
        touchDrag: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });


    $('#myTabs').on('toggled', function(event, tab) {
        console.log(tab);
    });

    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");


});
