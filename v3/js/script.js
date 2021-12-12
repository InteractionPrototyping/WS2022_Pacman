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

/* ------------- 

##################################
###### YOU ARE ALL SET ###########
################################## 

---------------*/
// setTimeout(function() {
//     window.location.href = "home.html";
// }, 5000); // this will call the function after 5 sec.

/* ------------- 

##################################
############# HOME ###############
################################## 

---------------*/


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