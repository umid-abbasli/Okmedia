// fixed navbar
if($(window).outerWidth() > 992){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 254) {
                $(".navbar").addClass("animated-navbar-fixed")
                $(".all-section-1").css({"margin-top":"94px"})
            }
            // else if( scroll > 170  && scroll < 224){
            //     // $(".animated-navbar-fixed").css({"animation-name":"fixed-slidedup"})
            //     console.log("fsegs");
            // }
            else{
                $(".navbar").removeClass("animated-navbar-fixed")
                // $(".animated-navbar-fixed").css({"animation-name":"fixed-slidedown"})
                $(".all-section-1").css({"margin-top":"0px"})
            }
    })  
}

// fixed navbar end 
// hamburger menu 
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
    $("#qiymet").click(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').removeClass('open');
	});

    $("#nav-icon1").click(function(){
     $(".hamburger-content").slideToggle();
    })
    $("#qiymet").click(function(){
        $(".hamburger-content").slideToggle();
       })
// hamburger accordion
    $(".hamburger-open-accordi").click(function(){
        let open = false
        $(".hamburger-accordi").slideToggle();
        if(!open){
            $(". fa-chevron-down").css({"transform":"rotate(90deg)"})
        }
        else{
            $(". fa-chevron-down").css({"transform":"rotate(90deg)"})
        }
        open = !open
    })
    
    // hamburger accordion end
    // hamburger menu end
    // section-5
    $(function() {
        $(".section-5-buttons > ul > li").on("click", function(e) {
            $(this).addClass("section-5-button-bg").siblings().removeClass("section-5-button-bg");
        });
        $(".owl-stage > div > div").on("click", function(a) {
            $(this).addClass("section-5-button-bg").siblings().removeClass("section-5-button-bg");
        });
    })
    document.getElementById
    // input mask
    // $("#a").mask("+994 ( 88 ) 888 - 88 - 88")
 
 // notafication
 $(".notafication").click(function(){
    $(".notafication-content").toggle()
    $(".notafication-number").hide()
    $(".notafi-icon > i").css({"animation-name":"a"})
})
// notafication end
   

   // notafication local storage
    let nota = "";

    try {
        // $(".notafication").click(function(){
        nota =localStorage.getItem("first visit notafication")
        // })
    }catch{}
 
    if(nota == "clear-notaficatio"){
        // alert("second");
        $(".notafi-icon > i").css({"animation-name":"a"})
        $(".notafication-number").hide()
        console.log("ok");
    }
    else{
        $(".notafication").click(function(){
     localStorage.setItem("first visit notafication","clear-notaficatio")
        })
    }

});

   // notafication local storage end



//    static page days for timer

// // Set the date we're counting down to
// var countDownDate = new Date("jan 1, 2023 00:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("timer").innerHTML = days + "gün " + hours + "s:"
//   + minutes + "d:" + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "EXPIRED";
//   }
// }, 1000);


// days for timer end
 




 