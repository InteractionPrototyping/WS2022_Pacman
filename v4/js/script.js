$(document).ready(function() {
    $("#welcome").show();
    $("#select-diet").hide();
    $("#select-pantry").hide();
    $("#pantry-selection-cereals").hide();
    $("#main").hide();
    $("#lunch-section").hide();
    $("#breakfast-section").hide();
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

    //functions to select ingredients in pantry for first 3 ingredients

    $('.ingr-option').on('click', function() {
        if(!$('.ingr-option').hasClass("ingredient-options-white")) {

            $('.ingr-option').removeClass("ingredient-options");
            $('.ingr-pantry').removeClass("invisible");
            $('.ingr-option').addClass("ingredient-options-white");
        } else {
            $('.ingr-option').removeClass("ingredient-options-white");
            $('.ingr-option').addClass("ingredient-options");
            $('.ingr-pantry').addClass("invisible");
        }
    });

    $('.ingr-option1').on('click', function() {
        if(!$('.ingr-option1').hasClass("ingredient-options-white")) {

            $('.ingr-option1').removeClass("ingredient-options");
            $('.ingr-pantry1').removeClass("invisible");
            $('.ingr-option1').addClass("ingredient-options-white");
        } else {
            $('.ingr-option1').removeClass("ingredient-options-white");
            $('.ingr-option1').addClass("ingredient-options");
            $('.ingr-pantry1').addClass("invisible");
        }
    });

    $('.ingr-option2').on('click', function() {
        if(!$('.ingr-option2').hasClass("ingredient-options-white")) {

            $('.ingr-option2').removeClass("ingredient-options");
            $('.ingr-pantry2').removeClass("invisible");
            $('.ingr-option2').addClass("ingredient-options-white");
        } else {
            $('.ingr-option2').removeClass("ingredient-options-white");
            $('.ingr-option2').addClass("ingredient-options");
            $('.ingr-pantry2').addClass("invisible");
        }
    });

    /////// do you have (dinner section) ///////
    $('#add-pantry').on('click', function() {
        $("#add-pantry").removeClass("button-add-to-pantry");
        $("#add-pantry").addClass("invisible");
        $("#pantry-added").removeClass("invisible");
        $("#pantry-added").addClass("button-added-to-pantry");

    });

    $('.ingr-option3').on('click', function() {
        if(!$('.ingr-option3').hasClass("ingredient-options-white")) {
            $('#diaries').removeClass("invisible");
            $('.ingr-option3').removeClass("ingredient-options");
            $('.ingr-pantry3').removeClass("invisible");
            $('.ingr-option3').addClass("ingredient-options-white");
        } else {
            $('.ingr-option3').removeClass("ingredient-options-white");
            $('.ingr-option3').addClass("ingredient-options");
            $('.ingr-pantry3').addClass("invisible");

        }
    });

    $('.ingr-option4').on('click', function() {
        if(!$('.ingr-option4').hasClass("ingredient-options-white")) {
            $('#diaries').removeClass("invisible");
            $('.ingr-option4').removeClass("ingredient-options");
            $('.ingr-pantry4').removeClass("invisible");
            $('.ingr-option4').addClass("ingredient-options-white");
        } else {
            $('.ingr-option4').removeClass("ingredient-options-white");
            $('.ingr-option4').addClass("ingredient-options");
            $('.ingr-pantry4').addClass("invisible");
        }
    });

    $('.ingr-option5').on('click', function() {
        if(!$('.ingr-option5').hasClass("ingredient-options-white")) {
            $('#diaries').removeClass("invisible");
            $('.ingr-option5').removeClass("ingredient-options");
            $('.ingr-pantry5').removeClass("invisible");
            $('.ingr-option5').addClass("ingredient-options-white");
        } else {
            $('.ingr-option5').removeClass("ingredient-options-white");
            $('.ingr-option5').addClass("ingredient-options");
            $('.ingr-pantry5').addClass("invisible");
        }
    });

    /*--update recipes after adding ingredient to pantry --*/
    
    setTimeout(function() {
        $('#add-pantry').on('click', function() {
            setTimeout(function() {
                $("#main").fadeOut();
                $("#updating-recipes").fadeIn(function() {
                    setTimeout(function() {
                        $("#main").fadeIn();
                        $("#updating-recipes").fadeOut();
                    }, 6000); // this will call the function after 6 sec.
                });
            }, 2000);
        });
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

    $(".lunch").on('click', function() {
        $("#lunch-section").fadeIn();
        $("#dinner-section").fadeOut();
        $("#breakfast-section").fadeOut();
    });

    $(".breakfast").on('click', function() {
        $("#breakfast-section").fadeIn();
        $("#dinner-section").fadeOut();
        $("#lunch-section").fadeOut();
    });

    $(".dinner").on('click', function() {
        $("#dinner-section").fadeIn();
        $("#lunch-section").fadeOut();
        $("#breakfast-section").fadeOut();
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

    /*--update recipes after deselecting ingredient --*/
    
    setTimeout(function() {
        $('.ingredient-a').on('click', function() {
            setTimeout(function() {
                $("#recipe-ingredients").fadeOut();
                $("#updating-recipes").fadeIn(function() {
                    setTimeout(function() {
                        $("#main").fadeIn();
                        $("#updating-recipes").fadeOut();
                    }, 6000); // this will call the function after 6 sec.
                });
            }, 2000);
        });
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
    $(".like").on('click', function() {
        if($("#like-big-ingredients").attr('src') != "src/svg/heart_circle_big_selected.svg") {
            $("#like-big-ingredients").attr('src', "src/svg/heart_circle_big_selected.svg");
            $("#like-big-ingredients").addClass("liked");
        } else {
            $("#like-big-ingredients").attr('src', "src/svg/heart_circle_big_unselected.svg");
            $("#like-big-ingredients").removeClass("liked");
        }

        if($("#like-big-cooking").attr('src') != "src/svg/heart_circle_big_selected.svg") {
            $("#like-big-cooking").attr('src', "src/svg/heart_circle_big_selected.svg");
            $("#like-big-ingredients").addClass("liked");
        } else {
            $("#like-big-cooking").attr('src', "src/svg/heart_circle_big_unselected.svg");
            $("#like-big-ingredients").removeClass("liked");
        }

        if($(".like-small").attr('src') != "src/svg/heart_circle_small_selected.svg") {
            $(".like-small").attr('src', "src/svg/heart_circle_small_selected.svg");
            $("#like-big-ingredients").addClass("liked");
        } else {
            $(".like-small").attr('src', "src/svg/heart_circle_small_unselected.svg");
            $("#like-big-ingredients").removeClass("liked");
        }
    });



    /* ------------- 

    ##################################
    ######### RECIPE VIDEO ###########
    ################################## 

    ---------------*/

    /* -- play video */
    $(".play-icon").on('click', function() {
        $("#recipe-video").fadeIn();
        $('#video-play').get(0).play()

        // $('.myHTMLvideo').click(function() {
        //     this.paused ? this.play() : this.pause();

        $("#recipe-cooking").fadeOut();
        $("#recipe-ingredients").fadeOut();
    });

    /*-- back to main page --*/
    $("#back-to-recipe").on('click', function() {
        $("#recipe-video").fadeOut();
        $("#recipe-ingredients").fadeIn();
        $("#recipe-cooking").fadeOut();
    });

    /*-----------------

    ##################################
    ######### USER PROFILE ###########
    ################################## 
            
    ----------------> */

    /*-- go to Instagram --*/
    $("#instagram-link").on('click', function() {
        window.location.href = 'https://www.instagram.com/foodiyo_app/';
    });




















});

//////////// functions to change diet type ////////////////////////

function selectdietveggie() {
    if (!document.getElementById("vegeterian-option").classList.contains("border-4px-green2---fdy-selected")) {
        if (!document.getElementById("vegan-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("gluten-free-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("pesceterian-option").classList.contains("border-4px-green2---fdy-selected")) {

            var selecteddiet = document.getElementById("vegeterian-option");
            selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
            selecteddiet.classList.add("border-4px-green2---fdy-selected");

            var selecteddieticon = document.getElementById("vegeterian-option1");
            selecteddieticon.src = "src/svg/vegeterian-selected.svg";

            var selecteddietinprofile = document.getElementById("selected-diet-option");
            selecteddietinprofile.src = "src/svg/selected_diet_option.svg";
        }
    } else {

        var selecteddiet = document.getElementById("vegeterian-option");
        selecteddiet.classList.remove("border-4px-green2---fdy-selected");
        selecteddiet.classList.add("border-4px-green2---fdy-unselected");

        var selecteddieticon = document.getElementById("vegeterian-option1");
        selecteddieticon.src = "src/svg/vegeterian.svg";

        var selecteddietinprofile = document.getElementById("selected-diet-option");
        selecteddietinprofile.src = "src/svg/no-diet-option.svg";

    }
}


function selectdietvegan() {
    if (!document.getElementById("vegan-option").classList.contains("border-4px-green2---fdy-selected")) {
        if (!document.getElementById("vegeterian-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("gluten-free-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("pesceterian-option").classList.contains("border-4px-green2---fdy-selected")) {

            var selecteddiet = document.getElementById("vegan-option");
            selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
            selecteddiet.classList.add("border-4px-green2---fdy-selected");

            var selecteddieticon = document.getElementById("vegan-option1");
            selecteddieticon.src = "src/svg/vegan-selected.svg";

            var selecteddietinprofile = document.getElementById("selected-diet-option");
            selecteddietinprofile.src = "src/svg/selected_diet_option_vegan.svg";
        }
    } else {

        var selecteddiet = document.getElementById("vegan-option");
        selecteddiet.classList.remove("border-4px-green2---fdy-selected");
        selecteddiet.classList.add("border-4px-green2---fdy-unselected");

        var selecteddieticon = document.getElementById("vegan-option1");
        selecteddieticon.src = "src/svg/vegan.svg";

        var selecteddietinprofile = document.getElementById("selected-diet-option");
        selecteddietinprofile.src = "src/svg/no-diet-option.svg";

    }
}

function selectdietpesceterian() {
    if (!document.getElementById("pesceterian-option").classList.contains("border-4px-green2---fdy-selected")) {
        if (!document.getElementById("vegeterian-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("vegan-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("gluten-free-option").classList.contains("border-4px-green2---fdy-selected")) {

            var selecteddiet = document.getElementById("pesceterian-option");
            selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
            selecteddiet.classList.add("border-4px-green2---fdy-selected");

            var selecteddieticon = document.getElementById("pesceterian-option1");
            selecteddieticon.src = "src/svg/pescetarian-selected.svg";

            var selecteddietinprofile = document.getElementById("selected-diet-option");
            selecteddietinprofile.src = "src/svg/selected_diet_option_pesce.svg";
        }
    } else {

        var selecteddiet = document.getElementById("pesceterian-option");
        selecteddiet.classList.remove("border-4px-green2---fdy-selected");
        selecteddiet.classList.add("border-4px-green2---fdy-unselected");

        var selecteddieticon = document.getElementById("pesceterian-option1");
        selecteddieticon.src = "src/svg/pesceterian.svg";

        var selecteddietinprofile = document.getElementById("selected-diet-option");
        selecteddietinprofile.src = "src/svg/no-diet-option.svg";

    }
}

function selectdietglutenfree() {
    if (!document.getElementById("gluten-free-option").classList.contains("border-4px-green2---fdy-selected")) {
        if (!document.getElementById("vegeterian-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("vegan-option").classList.contains("border-4px-green2---fdy-selected") &&
            !document.getElementById("pesceterian-option").classList.contains("border-4px-green2---fdy-selected")) {

            var selecteddiet = document.getElementById("gluten-free-option");
            selecteddiet.classList.remove("border-4px-green2---fdy-unselected");
            selecteddiet.classList.add("border-4px-green2---fdy-selected");

            var selecteddieticon = document.getElementById("gluten-free-option1");
            selecteddieticon.src = "src/svg/glutenfree-selected.svg";

            var selecteddietinprofile = document.getElementById("selected-diet-option");
            selecteddietinprofile.src = "src/svg/selected_diet_option_gluten.svg";
        }
    } else {

        var selecteddiet = document.getElementById("gluten-free-option");
        selecteddiet.classList.remove("border-4px-green2---fdy-selected");
        selecteddiet.classList.add("border-4px-green2---fdy-unselected");

        var selecteddieticon = document.getElementById("gluten-free-option1");
        selecteddieticon.src = "src/svg/glutenfree.svg";

        var selecteddietinprofile = document.getElementById("selected-diet-option");
        selecteddietinprofile.src = "src/svg/no-diet-option.svg";

    }
}

////////////// functions to deselect ingredients ///////////////////

function deselectIngredient1() {
    var ingrToBeDeselected = document.getElementById("ingredient-icon-a");
    if(!ingrToBeDeselected.classList.contains("deselected")) {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/pumpkin_deselected.png ";
        ingrToBeDeselected.classList.add("deselected");
    } else {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/pumpkin.png ";
        ingrToBeDeselected.classList.remove("deselected");
    }
}

function deselectIngredient2() {
    var ingrToBeDeselected = document.getElementById("ingredient-icon-a2");
    if(!ingrToBeDeselected.classList.contains("deselected")) {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/onion_deselected.png ";
        ingrToBeDeselected.classList.add("deselected");
    } else {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/onion.png ";
        ingrToBeDeselected.classList.remove("deselected");
    }
}

function deselectIngredient3() {
    var ingrToBeDeselected = document.getElementById("ingredient-icon-a3");
    if(!ingrToBeDeselected.classList.contains("deselected")) {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/garlic_deselected.png ";
        ingrToBeDeselected.classList.add("deselected");
    } else {
        ingrToBeDeselected.src = "src/img/pumpkin_soup_recipe/garlic.png ";
        ingrToBeDeselected.classList.remove("deselected");
    }
}


///////////// function to save recipe in cookbook if favorite //////////////////

function saveInCookbook() {
    var favoriteRecipe = document.getElementById("like-big-ingredients");
    if(!favoriteRecipe.classList.contains("liked")) {
        document.getElementById("save-recipes-here").innerHTML = "";
        document.getElementById("save-recipes-here").innerHTML += 
        '<div class="dish-suggestions">' +
        '<div class="dish-field">' +
            '<img class="dish-pic" alt="picture of dish" src="src/img/pumpkin_soup.png" />' +
            '<div class="text-dish-container">' +
                '<span class="inter-medium-white-9px">Pumpkin soup</span>' +
            '</div>' +
        '</div>' +
        '<img class="favorite-button-circle" alt="favorite button" src="src/svg/heart_circle_small_selected.svg" />' +
        '</div>';
    } else {
        document.getElementById("save-recipes-here").innerHTML = "";
    }
}