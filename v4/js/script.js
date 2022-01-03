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
        $("#recipe-ingredients").fadeOut();
        $("#recipe-cooking").fadeOut();
        $("#recipe-video").fadeOut();
    });

    $(".cookbook").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeIn("slow");
        $("#pantry-bar").fadeOut("slow");
        $("#user-profile").fadeOut("slow");
        $("#recipe-ingredients").fadeOut();
        $("#recipe-cooking").fadeOut();
        $("#recipe-video").fadeOut();
    });

    $(".pantry").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeOut("slow");
        $("#pantry-bar").fadeIn("slow");
        $("#user-profile").fadeOut("slow");
        $("#recipe-ingredients").fadeOut();
        $("#recipe-cooking").fadeOut();
        $("#recipe-video").fadeOut();
    });

    $(".profile").on("click", function() {
        $("#main").fadeOut("slow");
        $("#cookbook").fadeOut("slow");
        $("#pantry-bar").fadeOut("slow");
        $("#user-profile").fadeIn("slow");
        $("#recipe-ingredients").fadeOut();
        $("#recipe-cooking").fadeOut();
        $("#recipe-video").fadeOut();
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
        $("#select-pantry").fadeIn(1000);
        $("#select-diet").fadeOut(1000);
    });

    $('#no-special-diet').on('click', function() {
        $("#select-pantry").fadeIn(1000);
        $("#select-diet").fadeOut(1000);
    });

    /* --- choose your diet / change color of button after click --- */
    // $('.border-4px-green2---fdy').on('click', function() {
    //     $(this).css("background-color", "#5DB0A6");
    //     $(this).css("border-color", "white");
    // });

    //$('.vegeterian-option').on('click', function() {
    //    $('.vegeterian-option').removeClass(".border-4px-green2---fdy-unselected");
    //    $(this).addClass(".border-4px-green2---fdy-selected");
    //});



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

    ##################################
    ############# MAIN ###############
    ################################## 

    ---------------*/

    $('#see-recipe').on('click', function() {
        // $("#recipe-ingredients").show("slide", { direction: "left" }, 1000);
        $("#recipe-ingredients").fadeIn();
        $('#main').fadeOut();
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

    /*-- to lets cook page --*/
    $(".lets-cook").on('click', function() {
        $("#recipe-cooking").fadeIn();
        $("#recipe-ingredients").fadeOut();
        $("#recipe-video").fadeOut();
    });

    /*-- to recipe ingredients page --*/
    $(".ingredients").on('click', function() {
        $("#recipe-cooking").fadeOut();
        $("#recipe-ingredients").fadeIn();
        $("#recipe-video").fadeOut();
    });

    /*-- like recipe (& save it in cookbook) --*/
    $(".like-option").on('click', function() {
        $("#like-big-ingredients").attr('src', "src/svg/heart_circle_big_selected.svg");
        $("#like-big-cooking").attr('src', "src/svg/heart_circle_big_selected.svg");
    });

    /*-- play video --*/
    $(".play-icon").on('click', function() {
        $("#recipe-video").fadeIn();
        $("#recipe-cooking").fadeOut();
        $("#recipe-ingredients").fadeOut();
    });













});

//////////// functions to change diet type ////////////////////////

function selectdietveggie() {
    var selecteddiet = document.getElementById("vegeterian-option");
    selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
    selecteddiet.classList.add("border-4px-green2---fdy-selected");

    var selecteddieticon = document.getElementById("vegeterian-option1");
    selecteddieticon.src="src/svg/vegeterian-selected.svg";

    var selecteddietinprofile = document.getElementById("selected-diet-option");
    selecteddietinprofile.src="src/svg/selected_diet_option.svg";
}

/*
function selectdietvegan() {
    var selecteddiet = document.getElementById("vegan-option");
    selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
    selecteddiet.classList.add("border-4px-green2---fdy-selected");

    var selecteddieticon = document.getElementById("vegan-option1");
    selecteddieticon.src="src/svg/vegan-selected.svg";
}
*/