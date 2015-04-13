
$(document).ready(function() {


    var width = $(window).width();
    var height = $(window).height();


function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();


    $(function()
    {
        var $dropdowns = $('li.past'); // Specifying the element is faster for older browsers

    /**
     * Mouse events
     *
     * @description Mimic hoverIntent plugin by waiting for the mouse to 'settle' within the target before triggering
     */
    $dropdowns
        .on('mouseover', function() // Mouseenter (used with .hover()) does not trigger when user enters from outside document window
        {
            var $this = $(this);

            if ($this.prop('hoverTimeout'))
            {
                $this.prop('hoverTimeout', clearTimeout($this.prop('hoverTimeout')));
            }

            $this.prop('hoverIntent', setTimeout(function()
            {
                $this.addClass('hover');
            }, 80));
        })
        .on('mouseleave', function()
        {
            var $this = $(this);

            if ($this.prop('hoverIntent'))
            {
                $this.prop('hoverIntent', clearTimeout($this.prop('hoverIntent')));
            }

            $this.prop('hoverTimeout', setTimeout(function()
            {
                $this.removeClass('hover');
            }, 80));
        });
    });


    if (width>800) {

            console.log("width is greater than : border");

            $("#triangle").css("border-bottom", "90px solid #00C95E");

                $("#about-link").hover(function(){
                    $("#triangle").css("border-bottom", "90px solid #339966");
                    }, function(){
                    $("#triangle").css("border-bottom", "90px solid #00C95E");
                });

                $("#who-link").hover(function(){
                    $("#triangle").css("border-bottom", "90px solid #99CC00");
                    }, function(){
                    $("#triangle").css("border-bottom", "90px solid #00C95E");
                });

                $("#sponsors-link").hover(function(){
                    $("#triangle").css("border-bottom", "90px solid #00CC99");
                    }, function(){
                    $("#triangle").css("border-bottom", "90px solid #00C95E");
                });



                $("#films-link").hover(function(){
                    $("#triangle").css("border-bottom", "90px solid #00E68A");
                    }, function(){
                    $("#triangle").css("border-bottom", "90px solid #00C95E");
                });


                // $(".link-about").hover(function() {
                //     $("body.archive").css("background-color", "#99CC00");
                //     $("img").css("opacity", "0");
                //     }, function(){
                //     $("body.archive").css("background-color", "#EEEEEE");
                //     $("img").css("opacity", "1");
                // });

                $(".past").hover(function () {
                  if ( $( ".appear" ).is( ":hidden" ) ) {
                    $( ".appear" ).slideDown( "fast" );
                  } else {
                    $( ".appear" ).hide();
                  }
                });

    } else {

                console.log("width is less than 800: no border");

                
                $("#triangle").css("border-bottom", "40px solid #00C95E");

              
                $("#about-link").hover(function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                    }, function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                });

                $("#who-link").hover(function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                    }, function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                });

                $("#sponsors-link").hover(function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                    }, function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                });



                $("#films-link").hover(function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                    }, function(){
                    $("#triangle").css("border-bottom", "40px solid #00C95E");
                });
    }
};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
           

}); 
        



           

       
    



