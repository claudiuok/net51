/*

Template: COINEX - Crypto Currency HTML Template 
Author: iqonicthemes.in
Version: 3
Design and Developed by: iqonicthemes.in

*/

/*================================================
[  Table of contents  ]
================================================

:: Page loader
:: Back to top
:: Header
:: wow
:: counter
:: Progress Bar
:: countdown
:: owl carousel
:: Magnific Popup
:: Timeline
:: Chart
:: Chart Squer
:: Accordion
:: Contact from

======================================
[ End table content ]
======================================*/

"use strict";

/*************************
Page loader
*************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut();

}

/*************************
Back to top
*************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}


/*************************
Header
*************************/
function header() {
    $('.navbar-nav li a').on('click', function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1500);
        e.preventDefault();
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
}

/*************************
wow
*************************/

function wow() {
    new WOW().init();

}


/*************************
counter
*************************/
function counter() {
    $('.timer').countTo();
}

/*************************
Progress Bar
*************************/
function progress() {
    $('.iq-progress-bar > span').each(function() {
        var $this = $(this);
        var width = $(this).data('percent');
        $this.css({
            'transition': 'width 2s'
        });
        setTimeout(function() {
            $this.appear(function() {
                $this.css('width', width + '%');
            });
        }, 500);
    });
}

/*************************
countdown
*************************/
function countdown() {
    $('#countdown').countdown({
         date: '10/01/2019 23:59:59',
        offset: -8,
        day: 'Day',
        days: 'Days'
    });
}

/*************************
       owl carousel 
*************************/
function owlcarousel() {
    $(".owl-carousel").each(function() {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: {
                    items: $this.data('xx-items') ? $this.data('xx-items') : 1
                },
                600: {
                    items: $this.data('xs-items') ? $this.data('xs-items') : 1
                },
                767: {
                    items: $this.data('sm-items') ? $this.data('sm-items') : 2
                },
                992: {
                    items: $this.data('md-items') ? $this.data('md-items') : 2
                },
                1190: {
                    items: $this.data('lg-items') ? $this.data('lg-items') : 3
                },
                1200: {
                    items: $items
                }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
        });

    });

}

/*************************
Magnific Popup
*************************/
function popupgallery() {
    $('.popup-single').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">#%curr%</a>',
        }
    });
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
}

/*************************
Accordion
*************************/
function accordion() {
    var $acpanel = $(".iq-accordion .iq-ad-block > .ad-details"),
        $acsnav = $(".iq-accordion .iq-ad-block > .ad-title");

    $acpanel.hide().first().slideDown("easeOutExpo");
    $acsnav.first().addClass("ad-active");
    $acsnav.on('click', function() {
        var $this = $(this).next(".ad-details");
        $acsnav.parent().removeClass("ad-active");
        $(this).parent().addClass("ad-active");
        $acpanel.not($this).slideUp("easeInExpo");
        $(this).next().slideDown("easeOutExpo");
        return false;
    });

}


/*************************
Timeline
*************************/
function timelineone() {
    $('.timeline').timeline({
        forceVerticalMode: 800,
        mode: 'horizontal',
        visibleItems: 4
    });
}


/*************************
Chart
*************************/
function chart() {
    var chart = AmCharts.makeChart("chartdiv", {
        "theme": "none",
        "type": "serial",
        "startDuration": 2,
        "dataProvider": [{
            "country": "USA",
            "visits": 4025,
            "color": "#FF0F00"
        }, {
            "country": "China",
            "visits": 3882,
            "color": "#FF6600"
        }, {
            "country": "Japan",
            "visits": 3509,
            "color": "#FF9E01"
        }, {
            "country": "Germany",
            "visits": 3322,
            "color": "#FCD202"
        }, {
            "country": "UK",
            "visits": 2000,
            "color": "#F8FF01"
        }, {
            "country": "France",
            "visits": 2914,
            "color": "#B0DE09"
        }, {
            "country": "India",
            "visits": 2500,
            "color": "#04D215"
        }, {
            "country": "Spain",
            "visits": 2411,
            "color": "#0D8ECF"
        }, {
            "country": "Netherlands",
            "visits": 2265,
            "color": "#0D52D1"
        }, {
            "country": "Russia",
            "visits": 1000,
            "color": "#2A0CD0"
        }, {
            "country": "South Korea",
            "visits": 943,
            "color": "#8A0CCF"
        }, {
            "country": "Canada",
            "visits": 841,
            "color": "#CD0D74"
        }, {
            "country": "Brazil",
            "visits": 795,
            "color": "#754DEB"
        }, {
            "country": "Italy",
            "visits": 686,
            "color": "#DDDDDD"
        }, {
            "country": "Taiwan",
            "visits": 538,
            "color": "#333333"
        }],
        "valueAxes": [{
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "color": "#fff"
        }],
        "graphs": [{
            "balloonText": "[[category]]: <b>[[value]]</b>",
            "colorField": "color",
            "fillAlphas": 0.85,
            "lineAlpha": 0.1,
            "type": "column",
            "topRadius": 1,
            "valueField": "visits"
        }],
        "depth3D": 40,
        "angle": 30,
        "chartCursor": {
            "categoryBalloonEnabled": false,
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "color": "#fff",
            "gridAlpha": 0
        },
        "export": {
            "enabled": true
        }

    }, 0);

}

/*************************
chart round
*************************/

function chart_round() {
    var chart = AmCharts.makeChart("chartrounddiv", {

        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "color": "#fff",
        "addClassNames": true,
        "legend": {
            "position": "right",
            "color": "#fff",
            "marginRight": 100,
            "autoMargins": false
        },
        "innerRadius": "30%",
        "defs": {
            "filter": [{
                "id": "shadow",
                "width": "200%",
                "height": "200%",
                "feOffset": {
                    "result": "offOut",
                    "in": "SourceAlpha",
                    "dx": 0,
                    "dy": 0
                },
                "feGaussianBlur": {
                    "result": "blurOut",
                    "in": "offOut",
                    "stdDeviation": 5
                },
                "feBlend": {
                    "in": "SourceGraphic",
                    "in2": "blurOut",
                    "mode": "normal"
                }
            }]
        },
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9
        }, {
            "country": "Czech Republic",
            "litres": 301.9,
        }, {
            "country": "Ireland",
            "litres": 201.1
        }, {
            "country": "Germany",
            "litres": 165.8
        }, {
            "country": "Australia",
            "litres": 139.9
        }, {
            "country": "Austria",
            "litres": 128.3
        }, {
            "country": "UK",
            "color": "#fff",
            "litres": 99
        }, {
            "country": "Belgium",
            "litres": 60
        }, {
            "country": "The Netherlands",
            "litres": 50
        }],
        "valueField": "litres",
        "titleField": "country",
        "export": {
            "enabled": true
        }
    });

    chart.addListener("init", handleInit);

    chart.addListener("rollOverSlice", function(e) {
        handleRollOver(e);
    });

    function handleInit() {
        chart.legend.addListener("rollOverItem", handleRollOver);
    }

    function handleRollOver(e) {
        var wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
    }

}

/*************************
chart round
*************************/

function chartneww() {
var chart = AmCharts.makeChart( "chartnew", {
  "type": "pie",
  "theme": "light",
  "color": "#fff",
  "dataProvider": [ {
    "country": "Lithuania",
    "value": 260
  }, {
    "country": "Ireland",
    "value": 201
  }, {
    "country": "Germany",
    "value": 65
  }, {
    "country": "Australia",
    "value": 39
  }, {
    "country": "UK",
    "value": 19
  }, {
    "country": "Latvia",
    "value": 10
  } ],
  "valueField": "value",
  "titleField": "country",
  "outlineAlpha": 0.4,
  "depth3D": 15,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 30,
  "export": {
    "enabled": true
  }
} );
}







$(document).ready(function() {
    preloader(),
        backtotop(),
        header(),
        wow(),
        counter(),
        progress(),
        countdown(),
        owlcarousel(),
        popupgallery(),
        accordion(),
        timelineone();
        // contactfrom();
});

$(window).on('load', function() {
    chart(),
        chartneww(),
        chart_round();

});