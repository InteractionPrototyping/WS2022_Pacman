$(document).ready(function() {
    $("#welcome").show();
    $("#select-diet").hide();
    $("#select-pantry").hide();
    $("#pantry-selection-cereals").hide();
    $("#main").hide();
    $("#cookbook").hide();
    $("#pantry-bar").hide();
    $("#pantry-bar-cereals").hide();
    $("#user-profile").hide();
    $("#recipe-cooking").hide();
    $("#recipe-ingredients").hide();
    $("#recipe-video").hide();
    $("#you-are-set").hide();
    $("#updating-recipes").hide();
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
        $("#select-diet").fadeIn(2000, function() {
            // $("#welcome").hide();
            // $('#select-diet').show();
        });
        $('#lets-start').fadeOut(1500);

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


    /* ------------- 

    ##################################
    ####### SELECT PANTRY ############
    ################################## 

    ---------------*/

    $('#cereals').on('click', function() {
        $("#pantry-selection-cereals").show();
        $("#select-pantry").hide();
    });


    $('#save-get-recipe-suggestions').on('click', function() {
        $("#you-are-set").fadeIn();
        $("#select-pantry").fadeOut();
    });
    /* ------------- 

    ############################################
    ####### PANTRY SELECTED CEREALS ############
    ############################################ 

    ---------------*/

    $('#save-get-suggestions').on('click', function() {
        $("#you-are-set").fadeIn();
        $("#select-pantry").fadeOut();
        $("#pantry-selection-cereals").fadeOut();
    });

    $('#close-ingredients').on('click', function() {
        $("#select-pantry").show();
        $("#pantry-selection-cereals").hide();
    });

    /* ------------- 

    ################################
    ####### YOU ARE SET ############
    ################################ 

    ---------------*/
    $('#you-are-set').on('click', function() {
        setTimeout(function() {
            $("#main").fadeIn();
            $("#you-are-set").fadeOut();
        }, 6000); // this will call the function after 6 sec.
    });


    /* ------------- 

    ##################################
    ############# MAIN ###############
    ################################## 

    ---------------*/

    $('#see-recipe').on('click', function() {
        $("#recipe-ingredients").show("slide", { direction: "left" }, 1000);
        $('#main').hide();
    });












});