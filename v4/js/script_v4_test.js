/* ------------- 

##################################
########## WELCOME  ##############
################################## 

---------------*/

$(document).ready(function() {
    $("#select-diet").hide();

    $('#lets-start').on('click', function() {
        $(".title").animate({ top: -80 }, 2000);
        $(".text-1").animate({ top: -30 }, 2100);
        $(".overlap-group").animate({ top: -500 }, 1500, function() {
            $("#welcome").hide();
            $("#select-diet").show();
        });
    });
});