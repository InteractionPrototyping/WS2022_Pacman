/* ------------- 

##################################
########## WELCOME  ##############
################################## 

---------------*/


$(document).ready(function() {
    $("#select-diet").hide();
    $('#lets-start').on('click', function() {
        $(".title").animate({ top: -200 }, 2000);
        $(".text-1").animate({ top: -100 }, 2000);
        // $(".img-cucumber").animate({ top: -15000 }, 2000);
        $(".welcome-background-style").animate({ top: -200 }, 1500);
    });
});