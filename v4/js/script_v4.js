/* ------------- 

##################################
########## WELCOME  ##############
################################## 

---------------*/

$(document).ready(function() {
    $('#lets-start').on('click', function() {
        $(".title").animate({ top: -200 }, 2000);
        $(".text-1").animate({ top: -100 }, 2000);
        $(".welcome-background-style").animate({ top: -5000 }, 1500, function() {
            // window.location.href = 'select_diet.html';
        });
    });
});