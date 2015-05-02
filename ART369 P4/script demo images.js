// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"


$(".switchToCanvas").click(function(){
  $("#canvasDiv").css("opacity", "1").css("z-index", "150");
  // $(".switchToCanvas").css("display", "none");
  $('.switchToCanvas').attr("disabled", "disabled").css("color", "black");
  // $(".switchToImage").css("display", "block");


});


$(".switchToImage").click(function(){
  $("canvas").css("background", "transparent");
  $(".image").css("opacity", "0.5");
  $(".switchToImage").attr("disabled", "disabled").css("color", "black");
  // $(".reloadPage").css("display", "block");


});

$(".reloadPage").click(function(){
  location.reload();
});



$.ajax({
    // "url":"https://www.kimonolabs.com/api/4klmg2sc?apikey=QocBIUjme1ycBLx2MIqgTJD7pmKBt27l",
    "url":"https://www.kimonolabs.com/api/5v3xgom6?apikey=9SIV1EtWYanL8sGIB0z5cBO3VHFDr75B",

    "crossDomain":true,
    "dataType":"jsonp",
    // Make a call to the Kimono API following the "url" 
    
    'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a list displaying the data
    
    var collection = response.results.collection1;

    for (var i = 0; i < 1; i++){

      var randomCollection = collection[Math.floor(Math.random()*collection.length)];
    
       console.log(randomCollection);
      var photoURL = randomCollection.artImages.src;
      var artInformation = randomCollection.artInfo.text;

      // var time_stamp = collection[i].time_stamp.text;
      // console.log(artInfo);

      // if(i == 0){
      //   $('.cube-side.top').append('<img src="' + photoURL + '">');
      // }
      // if(i == 1){
      //   $('.cube-side.left').append('<img src="' + photoURL + '">');
      // }
      // if(i == 2){
      //   $('.cube-side.right').append('<img src="' + photoURL + '">');
      // }

      var artTitle = artInformation;
      artTitle = artTitle.substring(0, artTitle.indexOf("http") - 1);


      $('.image').append('<img src="' + photoURL + '">');
      $('.info-container').append('<p>' + artTitle + '</p>');
    }

  }
 
  })



