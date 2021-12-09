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

/* ------------- 

##################################
###### YOU ARE ALL SET ###########
################################## 

---------------*/
setTimeout(function() {
    window.location.href = "home.html";
}, 5000); // this will call the function after 5 sec.