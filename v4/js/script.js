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
    $("#info-what-you-need").hide();
    $("#recipe-video").hide();
    $("#you-are-set").hide();
    $("#updating-recipes").hide();

    /* ------------- 

    ##################################
    ######### GREEN TAB BAR ##########
    ################################## 

    ---------------*/
    $(".home").on("click", function() {
        $("#main").fadeIn("slow");
        $("#cookbook").fadeOut("slow");
        $("#pantry-bar").fadeOut("slow");
        $("#user-profile").fadeOut("slow");
    });

    $(".cookbook").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeIn("slow");
        $("#pantry-bar").fadeOut("slow");
        $("#user-profile").fadeOut("slow");
    });

    $(".pantry").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeOut("slow");
        $("#pantry-bar").fadeIn("slow");
        $("#user-profile").fadeOut("slow");
    });

    $(".profile").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeOut("slow");
        $("#pantry-bar").fadeOut("slow");
        $("#user-profile").fadeIn("slow");
    });

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
    $('.border-4px-green2---fdy').on('click', function() {
        $(this).css("background-color", "#5DB0A6", "border-color", "white");
    });
    // background - color: #5DB0A6 border-color: var(--green2---fdy);

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
        $("#select-pantry").fadeOut();
        $("#you-are-set").fadeIn(function() {
            setTimeout(function() {
                $("#main").fadeIn();
                $("#you-are-set").fadeOut();
                // $("#welcome").fadeOut();
            }, 6000); // this will call the function after 6 sec.
        });
    });

    $('#select-later').on('click', function() {
        $("#select-pantry").fadeOut();
        $("#you-are-set").fadeIn(function() {
            setTimeout(function() {
                $("#main").fadeIn();
                $("#you-are-set").fadeOut();
                // $("#welcome").fadeOut();
            }, 6000); // this will call the function after 6 sec.
        });
    });

    /* ------------- 

    ############################################
    ####### PANTRY SELECTED CEREALS ############
    ############################################ 

    ---------------*/

    $('#save-get-suggestions').on('click', function() {
        $("#select-pantry").fadeOut();
        $("#pantry-selection-cereals").fadeOut();
        $("#you-are-set").fadeIn(function() {
            setTimeout(function() {
                $("#main").fadeIn();
                $("#you-are-set").fadeOut();
                // $("#welcome").fadeOut();
            }, 6000); // this will call the function after 6 sec.
        });
    });

    $('#close-ingredients').on('click', function() {
        $("#select-pantry").show();
        $("#pantry-selection-cereals").hide();
    });

    /* ------------- 

    ############################################
    ######### PANTRY GREEN TAB BAR #############
    ############################################ 

    ---------------*/

    $('#save-update-recipes2').on('click', function() {
        $("#pantry-bar").fadeOut();
        $("#updating-recipes").fadeIn(function() {
            setTimeout(function() {
                $("#main").fadeIn();
                $("#updating-recipes").fadeOut();
            }, 6000); // this will call the function after 6 sec.
        });
    });

    /* ------------- 

    ################################
    ####### YOU ARE SET ############
    ################################ 

    ---------------*/
    // $('#you-are-set').on('click', function() {
    //     setTimeout(function() {
    //         $("#main").fadeIn();
    //         $("#you-are-set").fadeOut();
    //     }, 6000); // this will call the function after 6 sec.
    // });


    /* ------------- 

    ##################################
    ############# MAIN ###############
    ################################## 

    ---------------*/

    $('#see-recipe').on('click', function() {
        $("#recipe-ingredients").show("slide", { direction: "left" }, 1000);
        $('#main').hide();
    });


    /* ------------- 

    ##################################
    ###### RECIPE INGREDIENTS ########
    ################################## 

    ---------------*/

    /*-- back to main page --*/
    $("#back-to-main").on('click', function() {
        // $("#recipe-ingredients").show("slide", { direction: "right" }, 1000);
        $("#recipe-ingredients").fadeOut();
        $("#main").fadeIn();
    });


    /*-- Info about missing ingredient --*/
    $("#info-ingredients").on("click", function() {
        $("#info-what-you-need").show("slow");
    });

    $("#close-info-ingredient").on("click", function() {
        $("#info-what-you-need").hide("slow");
    });














});