
$(document).ready(function() {


    var width = $(window).width();
    var height = $(window).height();


function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();


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
        



           

       
    



