/* ------------- 

##################################
########## WELCOME  ##############
################################## 

---------------*/

$(document).ready(function() {
    $('#lets-start').on('click', function() {
        window.location.href = 'select_diet.html';
    });
});

/* ------------- 

##################################
############# DIET  ##############
################################## 

---------------*/
$(document).ready(function() {
    $('#save-diet-settings').on('click', function() {
        window.location.href = 'select_pantry.html';
    });
});

$(document).ready(function() {
    $('#no-special-diet').on('click', function() {
        window.location.href = 'select_pantry.html';
    });
});

/* ------------- 

##################################
######## PANTRY SET UP ###########
################################## 

---------------*/

$(document).ready(function() {
    $('#save-get-recipe-suggestions').on('click', function() {
        window.location.href = 'you_are_set.html';
    });
});

$(document).ready(function() {
    $('#select-later').on('click', function() {
        window.location.href = 'you_are_set.html';
    });
});

$(document).ready(function() {
    $('#save-get-suggestions').on('click', function() {
        window.location.href = 'you_are_set.html';
    });
});

$(document).ready(function() {
    $('#close-ingredients').on('click', function() {
        window.location.href = 'select_pantry.html';
    });
});

$(document).ready(function() {
    $('#open-ingredients').on('click', function() {
        window.location.href = 'select_pantry_selected.html';
    });
});

$(document).ready(function() {
    $('#select-ingr-later').on('click', function() {
        window.location.href = 'you_are_set.html';
    });
});



/* ------------- 

##################################
####### PANTRY STORAGE ###########
################################## 

---------------*/

$(document).ready(function() {
    $('#open-ingredient-options').on('click', function() {
        window.location.href = 'pantry2.html';
    });
});

$(document).ready(function() {
    $('#close-ingredient-options').on('click', function() {
        window.location.href = 'pantry.html';
    });
});

$(document).ready(function() {
    $('#save-update-recipes').on('click', function() {
        window.location.href = 'update_recipes.html';
    });
});

$(document).ready(function() {
    $('#save-update-recipes2').on('click', function() {
        window.location.href = 'update_recipes.html';
    });
});

$(document).ready(function() {
    $('#go-to-home3').on('click', function() {
        window.location.href = 'main.html';
    });
});

$(document).ready(function() {
    $('#go-to-profile3').on('click', function() {
        window.location.href = 'profile.html';
    });
});

$(document).ready(function() {
    $('#go-to-cookbook3').on('click', function() {
        window.location.href = 'cookbook.html';
    });
});

/* ------------- 

##################################
###### YOU ARE ALL SET ###########
################################## 

---------------*/
// setTimeout(function() {
//     window.location.href = "main.html";
// }, 5000); // this will call the function after 5 sec.

/* ------------- 

##################################
############# HOME ###############
################################## 

---------------*/

$(document).ready(function() {
    $('#see-recipe').on('click', function() {
        window.location.href = 'recipe_ingredients.html';
    });
});

$(document).ready(function() {
    $('#go-to-pantry').on('click', function() {
        window.location.href = 'pantry.html';
    });
});

$(document).ready(function() {
    $('#go-to-cookbook').on('click', function() {
        window.location.href = 'cookbook.html';
    });
});

$(document).ready(function() {
    $('#go-to-profile').on('click', function() {
        window.location.href = 'profile.html';
    });
});

/* ------------- 

##################################
########## COOKBOOK ##############
################################## 

---------------*/

$(document).ready(function() {
    $('#open-recipe').on('click', function() {
        window.location.href = 'recipe_ingredients.html';
    });
});

$(document).ready(function() {
    $('#go-to-pantry1').on('click', function() {
        window.location.href = 'pantry.html';
    });
});

$(document).ready(function() {
    $('#go-to-home1').on('click', function() {
        window.location.href = 'main.html';
    });
});

$(document).ready(function() {
    $('#go-to-profile1').on('click', function() {
        window.location.href = 'profile.html';
    });
});


/* ------------- 

##################################
########### PROFILE ##############
################################## 

---------------*/

$(document).ready(function() {
    $('#open-pantry-storage').on('click', function() {
        window.location.href = 'pantry.html';
    });
});

$(document).ready(function() {
    $('#go-to-pantry2').on('click', function() {
        window.location.href = 'pantry.html';
    });
});

$(document).ready(function() {
    $('#go-to-home2').on('click', function() {
        window.location.href = 'main.html';
    });
});

$(document).ready(function() {
    $('#go-to-cookbook2').on('click', function() {
        window.location.href = 'cookbook.html';
    });
});

/* ------------- 

##################################
###### RECIPE INGREDIENTS ########
################################## 

---------------*/

// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// var store = Redux.createStore(counter);

// function render() {
//     document.querySelector('#counter').innerText = store.getState();
// }

// store.subscribe(render);
// render();

// document.querySelector('#increment').addEventListener('click', function() {
//     store.dispatch({ type: 'INCREMENT' })
// });

// document.querySelector('#decrement').addEventListener('click', function() {
//     store.dispatch({ type: 'DECREMENT' })
// });



// var incrementPlus;
// var incrementMinus;

// var Plus = $(".plus");
// var Minus = $(".minus");

// var incrementPlus = Plus.click(function() {
//     var $n = $(this)
//         .parent(".plus")
//         .parent(".no-of-servings")
//         .find(".amount-of-servings");
//     $n.val(Number($n.val()) + 1);
// });

// var incrementMinus = buttonMinus.click(function() {
//     var $n = $(this)
//         .parent(".button-container")
//         .parent(".container")
//         .find(".qty");
//     var amount = Number($n.val());
//     if (amount > 0) {
//         $n.val(amount - 1);
//     }
// });

/* ------------- 

##################################
######## RECIPE COOKING ##########
########## INGREDIENTS ###########
################################## 

---------------*/

$(document).ready(function() {
    $('#tab-bar-lets-cook').on('click', function() {
        window.location.href = 'recipe_cooking.html';
    });
});

$(document).ready(function() {
    $('#tab-bar-ingredients').on('click', function() {
        window.location.href = 'recipe_ingredients.html';
    });
});

$(document).ready(function() {
    $('#recipe-video-play').on('click', function() {
        window.location.href = 'recipe_video.html';
    });
});

// $(document).ready(function() {
//     $('#like-recipe-big-heart').on('click', function() {
//         $(this).css("color", "black");
//     });
// });

// $(document).ready(function() {
//     $('#like-recipe-big-heart').css('color', 'red') {

//     };
// });