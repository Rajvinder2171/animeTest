$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('floatingNav');
    } else {
        $('#navBar').removeClass('floatingNav');
    }
});


window.resize(function(){
   
     if (screen.width <= 650){
       
var iframe = document.getElementById("slider").setAttribute("src", "/slider/index.html");
    }
    
    // else if(screen.width <= 960){
    //     document.getElementByTagName('iframe').src = 'desktopVideoFeed.html';
    // }
})