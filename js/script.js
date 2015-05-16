// $(window).load(function() {

//     var theWindow = $(window),
//         $bg = $("#bg"),
//         aspectRatio = $bg.width() / $bg.height();

//     function resizeBg() {

//         if ((theWindow.width() / theWindow.height()) < aspectRatio) {
//             $bg
//                 .removeClass()
//                 .addClass('bgheight');
//         } else {
//             $bg
//                 .removeClass()
//                 .addClass('bgwidth');
//         }

//     }

//     theWindow.resize(resizeBg).trigger("resize");

// });


$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");


});
