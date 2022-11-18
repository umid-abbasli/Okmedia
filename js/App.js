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
    let x = 0;
    $(".swiper-button-nextt").click(function(){
        x++;
        if(x>1){
            $(".slider-1-9").css({"visibility":"visible"})
        }
        else if(x>9){
            $(".slider-1-9").css({"visibility":"visible"})
        }
        if(x>8){
            x=0;
        }
        console.log(x);
    })
    $(".swiper-button-prevv").click(function(){
        x--;
        if(x<=1){
            $(".slider-1-9").css({"visibility":"hidden"})
        }
    })



});
    
// let myinput = document.getElementById("call-back-input")
// let myinputname = document.getElementById("call-back-input-name")
// if(myinput.value > 0){
//     myinputname.style.transform = "translateY(-95%)"
//     console.log(myinput.value);
// }
// function ok(){
//     console.log(myinput.value);
// }


 