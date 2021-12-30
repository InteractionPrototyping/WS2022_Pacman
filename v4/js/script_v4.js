$(document).ready(function() {
    $("#select-diet").hide();
    $("#select-pantry").hide();
    /* ------------- 

    ##################################
    ########## WELCOME  ##############
    ################################## 

    ---------------*/

    /* --- animation after clicking on lets's start --- */
    $('#lets-start').on('click', function() {
        $(".title").animate({ top: -80 }, 2000);
        $("#welcome .text-1").animate({ top: -30 }, 2100);
        $(".overlap-group").animate({ top: -500 }, 1500);
        $("#select-diet").fadeIn(2500, function() {
            $("#welcome").hide();
        });
    });

    /* ------------- 

    ##################################
    ########## SELECT DIET ###########
    ################################## 

    ---------------*/

    $('#save-diet-settings').on('click', function() {
        $("#select-pantry").fadeIn(2000);
        $("#select-diet").fadeOut(2000);
    });
    $('#no-special-diet').on('click', function() {
        $("#select-pantry").fadeIn(2000);
        $("#select-diet").fadeOut(2000);
    });


    /* --- choose your diet / change color of button after click --- */
    // $('#select-diet .vegeterian-option').on('click', function() {
    //             $(this).css("background-color", "blue"
    //             });
});