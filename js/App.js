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
    })
    document.getElementById




    // input mask
    // $("#a").mask("+994 ( 88 ) 888 - 88 - 88")




    
});



 