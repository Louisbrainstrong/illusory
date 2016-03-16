$(document).ready(function()  {    
    $('a').click(function(e){
        e.preventDefault();
        var link = $(this).attr('href');
        var posi = $(link).offset().top-$('#nav').height();
        $('body,html').animate({scrollTop:posi},750);
    }); 
    
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
    
    
    
   $(window).scroll(function(e) {
        e.preventDefault();
        var windowHeight = $(this).height(); 
        var headerHeight = $('header').height();
        var navbarHeight = $('#nav').height();
     
        //AFFIX menu to top, after header height
        $('#nav').toggleClass('affix', $(this).scrollTop()>headerHeight); 
        //Add gap spacing to account for navbar height
        $('#nav-spacer-2').toggleClass('navheight',  $(this).scrollTop()>headerHeight);  
       
        //Change TREES image to absolute positioning, if past SHAPES
        $('.topbanana').toggleClass('hero', $(this).scrollTop()<windowHeight); 
        $('#under').toggleClass('ontop', $(this).scrollTop()>=windowHeight);
        $('#trees').toggleClass('zero', $(this).scrollTop()>=windowHeight);
        

       // FADE #under header, containing text
        var fadeStart=windowHeight/2,
            fadeUntil=windowHeight*0.8,
            fading = $('#under');
       var offset = $(this).scrollTop(),opacity=1;
            if( offset<=fadeStart ){
                opacity=0;
            }else if( offset<=fadeUntil ){
                opacity=(offset-fadeStart)/(fadeUntil-fadeStart);
            }
            fading.css('opacity',opacity).html(opacity);
   });
    
    $('body').scrollspy({ target: '.navbar-collapse' });
});